import CallTous from "../Pages/Landing/CallToUs";
import Camera from "../Pages/Landing/Camera";
import Cameras from "../Pages/Landing/Cameras";
import Cart from "../Pages/Landing/Cart";
import Education from "../Pages/Landing/Education";
import Educations from "../Pages/Landing/Educations";
import Home from "../Pages/Landing/Home";
import Project from "../Pages/Landing/Project";
import Projects from "../Pages/Landing/Projects";

const landingRoutes = (isLogged = false) =>
    [
        { path: "", element: <Home /> },
        { path: "projects", element: <Projects /> },
        { path: "projects/:id", element: <Project /> },
        { path : "cameras" , element : <Cameras />},
        { path : "cameras/:id" , element : <Camera />},
        { path : "educations" , element : <Educations />},
        { path : "educations/:id" , element : <Education />},
        { path : "about-us" , element : <CallTous />},
          isLogged && {
            path: "cart",
            element: (
                <Cart />
            ),
          },
    ].filter(Boolean);
export default landingRoutes;