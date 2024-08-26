import Profile from "../Pages/User/Profile";
import UserPurchase from "../Pages/User/Purchases";


const userRoutes = (isLogged = false) =>
    [
        { path: "profile", element: <Profile /> },
        { path: "purchases", element: <UserPurchase /> },
    ].filter(Boolean);
export default userRoutes;