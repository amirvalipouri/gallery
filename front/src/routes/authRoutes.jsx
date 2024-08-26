import Signin from "../Pages/Auth/Signin";
import Signup from "../Pages/Auth/Signup";

const authRoutes = () =>
    [
        { path: "signin", element: <Signin /> },
        { path: "signup", element: <Signup /> },

    ].filter(Boolean);
export default authRoutes;