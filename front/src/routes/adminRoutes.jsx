import AdminCamera from "../Pages/Admin/camera";
import CategoryAdmin from "../Pages/Admin/category";
import Course from "../Pages/Admin/course";
import Image from "../Pages/Admin/image";

const adminRoutes = (isLogged = false) =>
    [
        { path: "category", element: <CategoryAdmin /> },
        { path: "image", element: <Image /> },
        { path: "camera", element: <AdminCamera /> },
        { path: "course", element: <Course /> },
        //   isLogged && {
        //     path: "cart",
        //     element: (
        //       <Container>
        //         <Cart />
        //       </Container>
        //     ),
        //   },
    ].filter(Boolean);
export default adminRoutes;