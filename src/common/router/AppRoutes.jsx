import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserNavbar } from "../../user/UserNavbar";
import { AdminNavbar } from "../../admin/AdminNavbar";
import { AdminProfile } from "../../admin/AdminProfile";
import { UserProfile } from "../../user/UserProfile";

const router = createBrowserRouter([
        {
            path:"/user",
            element:<UserNavbar></UserNavbar>,
            children:[
                {
                    path:"userprofile",
                    element:<UserProfile/>
                }
            ]
        },
        {
            path:"/admin",
            element:<AdminNavbar/>,
            children:[
                {
                    path:"adminprofile",
                    element:<AdminProfile></AdminProfile>
                }
            ]
        }
])

const AppRoutes = ()=> <RouterProvider router={router}></RouterProvider>
export default AppRoutes