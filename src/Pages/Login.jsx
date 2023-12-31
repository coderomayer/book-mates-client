import loginSVG from "../assets/login.svg"
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { FcGoogle } from "react-icons/fc";
import { userAuth } from "../Provider/AuthProvider";


const Login = () => {

    const {loginUser, googleLogin} = useContext(userAuth)
    const [error, setError] = useState()
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('')

        loginUser(email, password)
        .then((user => {
            swal("Welcome Back!", "Explore all the Products!", "success");
            navigate(location?.state? location.state : '/')
        }))

        .catch((error => {
            setError(error.message)
        }))

    
    }

    const handleGoogleLogin = () => {

        googleLogin()
        navigate(location?.state? location.state : '/')

    }


    return (

        <div>

            <section className="bg-gray-50 p-6 md:p-24">
                <div className="sm:flex gap-8 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">

                    <div>
                        <img className="w-full md:w-96" src={loginSVG} alt="" />
                    </div>

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login in to your account
                            </h1>
                            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" >
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium hover:underline text-amber-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-900 hover:bg-lime-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login </button>

                                <p className="text-sm font-light text-black dark:text-gray-400">
                                    Don’t have an account yet? <Link className=" font-bold text-white" to='/register'>Sign up</Link>
                                    
                                </p>

                                
                            </form>

                            <button onClick={handleGoogleLogin} className="bg-slate-50 text-black text-xs font-DM w-full p-4 rounded-lg flex items-center justify-center gap-4"> <FcGoogle className="text-lg"></FcGoogle> Login with Google</button>

                            {
                                error && <p className="bg-red-900 text-white p-4 rounded">{error}</p>
                            }

                        </div>
                    </div>

                </div>
            </section>

        </div>

    )
}

export default Login;