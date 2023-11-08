import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLaout";
import AddBook from "../Pages/AddBook";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Registraition from "../Pages/Registration";

const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout></MainLayout>,

        children: [

            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/category')
            },

            {
                path: 'add-book',
                element: <AddBook></AddBook>
            },

            {
                path: 'all-books',
                element: <AllBooks></AllBooks>
            },

            {
               path: 'borrowed-books',
               element: <BorrowedBooks></BorrowedBooks>
            },

            {
                path: 'register',
                element: <Registraition></Registraition>
            },

            {
                path: 'login',
                element: <Login></Login>
            }

        ]
    }

])

export default router;