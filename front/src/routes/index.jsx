import AdminPanel from "../Layouts/Admin";
import AuthLayout from "../Layouts/Auth";
import LandingLayout from "../Layouts/Landing";
import UserLayout from "../Layouts/User";
import adminRoutes from "./adminRoutes";
import authRoutes from "./authRoutes";
import landingRoutes from "./landingRoutes";
import userRoutes from "./userRoutes";
import { Navigate } from "react-router";

const NeedAuth = () => <Navigate to="/" replace />;
const NavToAdmin = () => <Navigate to="/admin" replace />;

const routes = (isLogged = true, role = "") => {
  const checkRole = (roles = []) =>
    isLogged && ["admin", ...roles].includes(role);
  return [
    {
      path: "",
      element: <LandingLayout/>,
      children: landingRoutes(isLogged),
    },
    // {
    //   path: "/",
    //   element: checkRole(["student", "Q9^B%^HWUc"]) ? (
    //     <UsersPanel />
    //   ) : (
    //     <NeedAuth />
    //   ),
    //   children: userRoutes,
    // },
    {
      path: "/admin",
      element: checkRole() ? <AdminPanel /> : <NeedAuth />,
      children: adminRoutes(),
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: authRoutes(),
    },
    {
      path: "/user",
      element: checkRole(["user" , "admin"]) ? <UserLayout /> : <NeedAuth />,
      children: userRoutes(),
    },
    // {
    //   path: "auth",
    //   element: <LoginLayout/>,
    //   children: authRoutes(),
    // },
    // {
    //   path: "/accountantLogin",
    //   element: <LoginLayout />,
    //   children: [
    //     {
    //       path: "",
    //       element: <AccountantLogin />,
    //     },
    //   ],
    // },
    // {
    //   path: "/",
    //   element: checkRole(["student","6e5KXjhLJ", "unregistered"]) ? (
    //     <UsersPanel />
    //   ) : (
    //     <NeedAuth />
    //   ),
    //   children: userRoutes,
    // },
    // {

    // {
    //   path: "/accountant",
    //   element: checkRole(["6e5KXjhLJ", "unregistered"]) ? <AccountantLayout /> : <NeedAuth />,
    //   children: accountantRoutes,
    // },
    // {
    //   path: "/",
    //   children : [
    //     {path : "dental" , element : <Dental/>},
    //     {path : "eghtesadbook" , element : <Eghtesad/>},
    //     {path : "AstrologyChart" , element : <AstrologyChart/>},
    //     isLogged && {path : "order" , element : <CartCountProvider><Order/></CartCountProvider>}
    //   ]
    // },
    {
      path: "*",
      element: <h1 className="text-center text-red-500 display-1 py-5">404</h1>,
    },
  ];
};
export default routes;
