import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLaout";
import AddBook from "../Pages/AddBook";
import AllBooks from "../Pages/AllBooks";
import BorrowedBooks from "../Pages/BorrowedBooks";
import Home from "../Pages/Home";

const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout></MainLayout>,

        children: [

            {
                index: true,
                element: <Home></Home>
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
            }

        ]
    }

])

export default router;