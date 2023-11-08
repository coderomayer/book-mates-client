import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/BookMates.png"
import { userAuth } from "../Provider/AuthProvider";


const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);
    const { user, logOut } = useContext(userAuth)

    const toggleNav = () => {
        setOpenNav(!openNav);
    };

    const navList = () => {

        return (
            <>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/add-book"  // Replace with the correct path for the "Event" link
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Add Book
                </NavLink>

                <NavLink
                    to="/all-books"  // Replace with the correct path for the "Services" link
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    All Books
                </NavLink>
                
                <NavLink
                    to="/borrowed-books"  // Replace with the correct path for the "Services" link
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-blue-900" : ""
                    }
                >
                    Borrowed Books
                </NavLink>





            </>
        );
    };


    const handleLogout = () => {
        logOut()
    }

    return (

        <header className="bg-blue-gray-100 border-b-2 border-gray-200 font-DM ">
            <div className="container mx-auto py-4 px-4 md:flex md:items-center md:justify-between">
                <div className="flex items-center justify-between">

                    <a href="/" className="text-2xl font-semibold text-gray-800">
                        <img className='w-12' src={Logo} alt="" />
                    </a>

                    {/* Mobile menu toggle button */}

                    <button
                        onClick={toggleNav}
                        className="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
                    >
                        <svg
                            className={`w-6 h-6 ${openNav ? 'hidden' : 'block'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>

                        <svg
                            className={`w-6 h-6 ${openNav ? 'block' : 'hidden'}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>

                        </svg>
                    </button>
                </div>

                {/* Desktop navigation */}
                <nav className="hidden md:flex space-x-4">
                    {navList()}

                    {
                        user ? (
                            <>
                                <button className='bg-red-700 text-white px-4 py-2 rounded text-xs' onClick={handleLogout}>Log out</button>

                            </>
                        ) : (
                            <NavLink to='/login'>
                                <button className="bg-black text-white px-4 py-2 rounded text-xs">Login</button>
                            </NavLink>
                        )
                    }



                </nav>


                {/* Mobile navigation */}

                <div
                    className={`${openNav ? '' : 'hidden'
                        } mt-4  bg-blue-gray-200 flex flex-col gap-4 p-6  rounded `}
                >

                    {navList()}

                </div>
                
            </div>
        </header>
    )
}

export default Navbar;