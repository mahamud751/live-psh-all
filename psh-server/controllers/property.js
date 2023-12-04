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
    // if (!property) {
    //   return res.status(404).json({ error: "Property not found" });
    // }

    // Update the property fields

    const updateData = {
      name: req.body.name,
      city: req.body.city,
      floor: req.body.floor,
      roomNumber: req.body.roomNumber,
      builtYear: req.body.builtYear,
      area: req.body.area,
      totalRoom: req.body.totalRoom,
      desc: req.body.desc,
      fulldesc: req.body.fulldesc,
      perDay: req.body.perDay,
      perMonth: req.body.perMonth,
      perYear: req.body.perYear,
      bedroom: req.body.bedroom,
      bathroom: req.body.bathroom,
      car: req.body.car,
      bike: req.body.bike,
      pet: req.body.pet,
      categoryId: req.body.categoryId,
      recommended: req.body.recommended,
      furnitured: req.body.furnitured,
      branchId: req.body.branchId,
      facility: req.body.facility,
      commonfacility: req.body.commonfacility,
      photos: req.body.photos,
      meal: req.body.meal,
      bedType: req.body.bedType,
      CCTV: req.body.CCTV,
      WiFi: req.body.WiFi,
      balcony: req.body.balcony,
      totalPerson: req.body.totalPerson,
      rentDate: property?.rentDate,
      type: req.body.type,
      rules: req.body.rules,
      roomCategory: req.body.roomCategory,
      additionalFacility: req.body.additionalFacility,
      apartmentRent: req.body.apartmentRent,
      serviceCharge: req.body.serviceCharge,
      security: req.body.security,
      faltPolicy: req.body.faltPolicy,
      seats: req.body.seats,
      isPublished: req.body.isPublished,
    };

    const result = await Property.updateOne(
      { _id: propertyId },
      { $set: updateData },
      { runValidators: true }
    );
    res.status(200).json(result);
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
