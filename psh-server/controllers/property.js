import Category from "../models/Category.js";
import Property from "../models/Property.js";
import Branch from "../models/Branch.js";

export const CreatePropertys = async (req, res, next) => {
  try {
    const {
      name,
      city,
      floor,
      roomNumber,
      builtYear,
      area,
      totalRoom,
      available,
      desc,
      fulldesc,
      rating,
      perDay,
      perMonth,
      perYear,
      bedroom,
      bathroom,
      car,
      bike,
      pet,
      categoryId,
      recommended,
      furnitured,
      branchId,
      facility,
      commonfacility,
      photos,
      meal,
      bedType,
      CCTV,
      WiFi,
      balcony,
      totalPerson,
      rentDate,
      type,
      rules,
      //apartment
      roomCategory,
      additionalFacility,
      apartmentRent,
      serviceCharge,
      security,
      faltPolicy,
      seats, // Add the "options" field for seat options
      isPublished,
    } = req.body;

    // Find the category by ID
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Find the branch by ID
    const branch = await Branch.findById(branchId);
    if (!branch) {
      return res.status(404).json({ error: "Branch not found" });
    }

    // Create the product and assign it to the category, branch, and facilities
    const product = new Property({
      name,
      city,
      available,
      desc,
      roomNumber,
      fulldesc,
      rating,
      perDay,
      type,
      perMonth,
      perYear,
      recommended,
      bedroom,
      bathroom,
      car,
      bike,
      pet,
      facility,
      commonfacility,
      furnitured,
      floor,
      builtYear,
      area,
      totalRoom,
      photos,
      bedType,
      meal,
      CCTV,
      WiFi,
      balcony,
      totalPerson,
      rentDate: rentDate,
      rules,
      //apartment
      roomCategory,
      additionalFacility,
      apartmentRent,
      serviceCharge,
      security,
      faltPolicy,
      category: category._id,
      branch: branch._id,
      seats: seats, // Set the seat options
      isPublished,
    });
    await product.save();

    // Add the product to the category's products array
    category.property.push(product._id);
    await category.save();

    // Add the product to the branch's products array
    branch.property.push(product._id);
    await branch.save();

    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

export const getPropertys = async (req, res, next) => {
  const {
    min,
    max,
    bedroom,
    recommended,
    furnitured,
    type,
    commonfacility,
    facility,
    branch,
    category,
    sort,
    ...others
  } = req.query;
  console.log("Received type:", type);
  console.log("Received furnitured:", furnitured);
  console.log("Received category:", category);

  try {
    let query = Property.find({ ...others });
    if (branch) {
      // Assuming "branch" is the branch name you want to filter by
      const branchId = await Branch.findOne({ name: branch }).select("_id");
      query = query.where("branch").equals(branchId);
    }
    if (bedroom) {
      query = query.where("bedroom").in(bedroom.split(","));
    }

    if (min && max) {
      query = query.where("perDay").gte(min).lte(max);
    } else if (min) {
      query = query.where("perDay").gte(min);
    } else if (max) {
      query = query.where("perDay").lte(max);
    }
    // Handle sorting based on perDay price
    if (sort === "asc") {
      query = query.sort({ perDay: 1 }); // Ascending order
    } else if (sort === "desc") {
      query = query.sort({ perDay: -1 }); // Descending order
    }
    if (furnitured === "yes" || furnitured === "no") {
      query = query.where("furnitured").equals(furnitured);
    }
    if (type === "male" || type === "female" || type === "both") {
      query = query.where("type").equals(type);
    }
    if (category) {
      // Assuming "category" is a string representing the category name
      query = query.populate({
        path: "category",
        match: { name: category },
      });
    }
    if (facility) {
      // Assuming "facilities" is an array of facility names
      query = query.populate({
        path: "facility",
        match: { name: { $in: facility } },
      });
    }
    if (commonfacility) {
      // Assuming "facilities" is an array of facility names
      query = query.populate({
        path: "commonfacility",
        match: { name: { $in: commonfacility } },
      });
    }

    if (
      !bedroom &&
      !min &&
      !max &&
      !others.city &&
      !furnitured &&
      !type &&
      !category &&
      !facility
    ) {
      // If no search parameters are specified, return all properties
      query = Property.find();
    }

    // If end date === current date ? then property startDate and endDate set null

    const properties = await query
      .populate("category review branch facility commonfacility")
      .limit(req.query.limit);

    // If Current Date === Booking End date? then auto delete booking
    const currentDate = new Date().toISOString().split("T")[0];
    const condition = { bookEndDate: currentDate };

    await Property.updateMany(
      {
        rentDate: { $elemMatch: condition },
      },
      {
        $pull: {
          rentDate: condition,
        },
      },

      { new: true }
    );
    // If Current Date === Booking Seat End date? then auto delete booking Seat
    await Property.updateMany(
      { "seats.rentDate.bookEndDate": currentDate },
      {
        $pull: {
          "seats.$[].rentDate": { bookEndDate: currentDate },
        },
      }
    );

    res.status(200).json(properties);
  } catch (err) {
    next(err);
  }
};

export const getSinglePropertys = async (req, res, next) => {
  try {
    const propertyId = req.params.id;

    // Find the property by ID
    const property = await Property.findById(propertyId).populate(
      "category facility review"
    );

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    // Increment the view count by 1
    property.views++;
    await property.save();

    res.status(200).json(property);
  } catch (err) {
    next(err);
  }
};

export const deletePropertys = async (req, res, next) => {
  try {
    const propertyId = req.params.id;

    // Find the property by ID
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    // Find the associated category
    const category = await Category.findById(property.category);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Find the associated branch
    const branch = await Branch.findById(property.branch);
    if (!branch) {
      return res.status(404).json({ error: "Branch not found" });
    }

    // Remove the property from the category's property array
    category.property.pull(propertyId);
    await category.save();

    // Remove the property from the branch's property array
    branch.property.pull(propertyId);
    await branch.save();

    // Delete the property
    await Property.findByIdAndDelete(propertyId);

    res.status(200).json(property);
  } catch (err) {
    next(err);
  }
};

export const updatePropertys = async (req, res, next) => {
  try {
    const propertyId = req.params.id;

    // Status Update

    if (req.body?.isPublished) {
      await Property.findByIdAndUpdate(
        req.params.id,
        { $set: { isPublished: req.body.isPublished } },
        { new: true }
      );
    }
    // Find the property by ID
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    const {
      name,
      city,
      availble,
      desc,
      roomNumber,
      fulldesc,
      rating,
      perDay,
      perMonth,
      perYear,
      bedroom,
      bathroom,
      car,
      recommended,
      bike,
      pet,
      categoryId,
      furnitured,
      branchId,
      facility,
      floor,
      builtYear,
      area,
      totalRoom,
      photos,
      meal,
      bedType,
      type,
      CCTV,
      WiFi,
      balcony,
      totalPerson,
      rules,
      //apartment
      roomCategory,
      additionalFacility,
      apartmentRent,
      serviceCharge,
      security,
      faltPolicy,
      seats,
    } = req.body;

    // // Check if the category ID has changed
    // if (categoryId !== String(property.category)) {
    //   // Find the new category
    //   const newCategory = await Category.findById(categoryId);
    //   if (!newCategory) {
    //     return res.status(404).json({ error: "New category not found" });
    //   }

    //   // Find the previous category
    //   const previousCategory = await Category.findById(property.category);
    //   if (!previousCategory) {
    //     return res.status(404).json({ error: "Previous category not found" });
    //   }

    //   // Remove the property from the previous category's property array
    //   previousCategory.property.pull(propertyId);
    //   await previousCategory.save();

    //   // Assign the property to the new category
    //   property.category = newCategory._id;

    //   // Add the property to the new category's property array
    //   newCategory.property.push(propertyId);
    //   await newCategory.save();
    // }

    // // Check if the branch ID has changed
    // if (branchId !== String(property.branch)) {
    //   // Find the new branch
    //   const newBranch = await Branch.findById(branchId);
    //   if (!newBranch) {
    //     return res.status(404).json({ error: "New branch not found" });
    //   }

    //   // Find the previous branch
    //   const previousBranch = await Branch.findById(property.branch);
    //   if (!previousBranch) {
    //     return res.status(404).json({ error: "Previous branch not found" });
    //   }

    //   // Remove the property from the previous branch's property array
    //   previousBranch.property.pull(propertyId);
    //   await previousBranch.save();

    //   // Assign the property to the new branch
    //   property.branch = newBranch._id;

    //   // Add the property to the new branch's property array
    //   newBranch.property.push(propertyId);
    //   await newBranch.save();
    // }

    // Update the property fields
    property.name = name;
    property.city = city;
    property.availble = availble;
    property.desc = desc;
    property.roomNumber = roomNumber;
    property.fulldesc = fulldesc;
    property.type = type;
    property.rating = rating;
    property.perDay = perDay;
    property.recommended = recommended;
    property.furnitured = furnitured;
    property.perMonth = perMonth;
    property.perYear = perYear;
    property.bedroom = bedroom;
    property.bathroom = bathroom;
    property.car = car;
    property.photos = photos;
    property.bike = bike;
    property.pet = pet;
    property.facility = facility;
    property.floor = floor;
    property.builtYear = builtYear;
    property.area = area;
    // property?.bedType = bedType;
    property.totalRoom = totalRoom;
    property.totalPerson = totalPerson;
    property.CCTV = CCTV;
    property.WiFi = WiFi;
    property.balcony = balcony;
    // property.gas = gas;
    // property.ccTv = ccTv;
    // property.generator = generator;
    // property.parking = parking;
    property.seats = seats;

    // property.occupanct = occupanct;
    property.meal = meal;
    property.rules = rules;
    property.roomCategory = roomCategory;
    property.additionalFacility = additionalFacility;
    property.apartmentRent = apartmentRent;
    property.serviceCharge = serviceCharge;
    property.security = security;
    property.faltPolicy = faltPolicy;
    // Save the updated property
    await property.save();

    res.status(200).json(property);
  } catch (err) {
    next(err);
  }
};

export const getRecommendedPropertys = async (req, res, next) => {
  try {
    const properties = await Property.find({ recommended: "yes" })
      .populate("category review branch")
      .limit(req.query.limit);

    res.status(200).json(properties);
  } catch (err) {
    next(err);
  }
};
