import reading from "../../assets/reading-bro.svg";
import event from "../../assets/Library-rafiki.svg";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";


const Home = () => {

    const books = useLoaderData()
    console.log(books);

    return (
        <div className=''>

            {/* Header */}

            <div className="h-screen relative">

                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536965764833-5971e0abed7c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover"></div>
                <div class="absolute inset-0 bg-slate-800 opacity-90"></div>


                <div className="absolute inset-0 flex flex-col items-start justify-center text-white lg:w-2/3 p-8 md:p-24 text-left font-DM">

                    <h2 className="text-4xl md:text-6xl font-extrabold uppercase  ">Welcome to <span className="text-lime-600">BookMates</span> Library</h2>

                    <p className="my-4 text-xl">Your Gateway to a World of Knowledge</p>

                </div>
            </div>



            {/* Category Section */}

            <div className="p-8 md:p-24 bg-lime-600 grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">


                {
                    books.map(book => <CategoryCard key={book._id} book={book}></CategoryCard>)
                }


            </div>



            {/* How It Works: */}

            <div className="p-8 md:p-24 bg-amber-100 md:flex gap-20">
                <div className="flex-1">
                    <img className="w-3/4" src="../assets/BookMates.png" alt="" />
                    <img src={reading} alt="" />
                </div>

                <div className="flex-1">
                    <h2 className="text-4xl font-bold py-4">How It Works:</h2>
                    <p>At BookMates, the process of borrowing and returning books is designed to be as effortless as turning a page. To get started, simply browse our extensive catalog of books. You can search by title, author, genre, or explore our featured collections. Once you've found a book that piques your interest, select it, and with a click of the "Borrow" button, the book becomes yours. You can borrow multiple books simultaneously. We've got your back with due date reminders, ensuring you return books on time, allowing you to enjoy your reading without the worry of late returns. Dive into your chosen book, access it 24/7 from any device with an internet connection, and when you're done, returning it is just as easy. Visit your account, click "Return," and give others the chance to enjoy the same literary adventure. It's a seamless and enjoyable process, making BookMates your ideal companion on your reading journey.</p>
                </div>
            </div>

            {/* Event */}

            <div className="p-8 md:p-24 bg-slate-400 md:flex gap-20">

                <div className="flex-1">
                    <h2 className="text-8xl font-mono font-bold py-4">Book Club Discussion</h2>
                    <p> <span className="font-bold">Date:</span> December 5, 2023</p>
                    <p> <span className="font-bold">Time:</span>  7:00 PM - 8:30 PM</p>
                    <p className="py-4">Dive into a lively book club discussion on the gripping novel "The Secret Garden" by Frances Hodgson Burnett. Share your insights and connect with fellow readers in this interactive session.</p>

                    <div className="flex gap-4">
                        <button className="bg-white py-2 px-4 rounded-md text-xs">Details</button>

                        <button className="bg-white py-2 px-4 rounded-md text-xs">Register Now</button>
                    </div>


                </div>

                <div className="flex-1">
                    <img className="w-3/4" src="../assets/BookMates.png" alt="" />
                    <img src={event} alt="" />
                </div>

            </div>

            <div>
                
            </div>

        </div>
    )
}

export default Home;