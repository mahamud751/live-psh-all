import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Success from "../pages/Success/Success";
import Profile from "../pages/Profile/Profile";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import SignIn from "../pages/SignUp/SignIn";
import Room from "../pages/Details/Room";
import Checkout from "../pages/Checkout/Checkout";
import Category from "../pages/Single/Category";
import List from "../pages/List/List";
import PrivateRoute from "./PrivateRoute";
import Branch from "../pages/Details/BranchDetails";
import PersonalInfo from "../pages/Booking/PersonalInfo";
import BookNow from "../pages/Booking/BookNow";
import Invoice from "../pages/Invoice/Invoice";

import PromoList from "../pages/Promo/Promo";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";

import AllRecomonded from "../components/home/AllRecomonded";
import FaqQuestions from "../pages/Faq/FaqQuestion";
import Business from "../pages/new/Business";

import Partner from "../pages/new/Partner";
import Collaberation from "../pages/new/Collaberation";
import PshFinance from "../pages/PshFinance/PshFinance";
import LeaseProperty from "../pages/LeaseProperty/LeaseProperty";
import ExtraForm from "../pages/ExtraForm/ExtraForm";
import PromoDetails from "../pages/Promo/PromoDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/list",
        element: <List></List>,
      },
      {
        path: "/lease-property",
        element: <LeaseProperty />,
      },
      {
        path: "/:room/:id",
        element: <Room></Room>,
      },
      {
        path: "/promo",
        element: <PromoList></PromoList>,
      },
      {
        path: "/recomended",
        element: <AllRecomonded></AllRecomonded>,
      },
      {
        path: "/promo/:id",
        element: <PromoDetails></PromoDetails>,
      },
      {
        path: "/branch/:id",
        element: <Branch></Branch>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },

      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/success",
        element: <Success></Success>,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/corporate-housing",
        element: <Business />,
      },
      {
        path: "/faq-question",
        element: <FaqQuestions />,
      },
      {
        path: "/psh-finance",
        element: <PshFinance />,
      },
      {
        path: "/partner",
        element: <Partner />,
      },
      {
        path: "/collaberation",
        element: <Collaberation />,
      },
      {
        path: "/extra-form",
        element: <ExtraForm />,
      },
    ],
  },

  {
    path: "/personal-info",
    element: (
      <PrivateRoute>
        <PersonalInfo></PersonalInfo>
      </PrivateRoute>
    ),

    children: [
      {
        path: "/personal-info",
        element: <PersonalInfo></PersonalInfo>,
      },
      // {
      //   path: "/personal-info/m-info",
      //   element: <Personal></Personal>,
      // },
      // {
      //   path: "/personal-info/m-edit",
      //   element: <EditProfile></EditProfile>,
      // },
      // {
      //   path: "/personal-info/m-booking",
      //   element: <Booking></Booking>,
      // },
      // {
      //   path: "/personal-info/m-payment",
      //   element: <Payment></Payment>,
      // },
      // {
      //   path: "/personal-info/m-wishlist",
      //   element: <WishList></WishList>,
      // },
      // {
      //   path: "/personal-info/m-list",
      //   element: <TicketList></TicketList>,
      // },
      // {
      //   path: "/personal-info/m-Security",
      //   element: <Setting></Setting>,
      // },
      // {
      //   path: "/personal-info/m-vouchers",
      //   element: <Vouchers></Vouchers>,
      // },
      // {
      //   path: "/personal-info/m-referral",
      //   element: <Referral></Referral>,
      // },
      // {
      //   path: "/personal-info/m-community",
      //   element: <Community></Community>,
      // },
    ],
  },
  {
    path: "/booking-now",
    element: (
      <PrivateRoute>
        <BookNow></BookNow>
      </PrivateRoute>
    ),

    children: [
      {
        path: "/booking-now",
        element: <BookNow></BookNow>,
      },
    ],
  },
  {
    path: "/checkout",
    element: (
      <PrivateRoute>
        <Checkout></Checkout>
      </PrivateRoute>
    ),

    children: [
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);
