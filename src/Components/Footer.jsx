const Footer = () => {

    return (
        <div className="bg-zinc-800 py-16 px-8 md:p-24 text-white md:flex gap-20 font-mono items-end  ">

            <div className="flex-1 flex flex-col gap-4 ">
                <h2 className="text-2xl font-semibold">About Us:</h2>
                <p className="text-sm"> <span className="font-semibold text-lime-400">BookMates</span> is your digital library management companion, dedicated to making the world of books more accessible and enjoyable. Our platform is designed to streamline the borrowing and returning of books, keep you updated on due dates, and enhance your reading experience. With BookMates, you can explore an extensive catalog of books, manage your library, and connect with fellow book lovers.</p>

            </div>

            <div className="flex-1 flex  flex-col gap-4 mt-8">
                <h2 className="text-2xl font-semibold">Stay In the Know</h2>
                <p className="text-sm">Subscribe to our newsletter to receive the latest updates, reading recommendations, and exclusive offers from BookMates. Join our community of book enthusiasts and never miss a literary beat.</p>

                <div>
                    <input className="p-2 rounded-l-md" type="email" />
                    <button className="bg-lime-800 py-2 px-4 rounded-r-md">Subscribe</button>
                </div>


            </div>



        </div>
    )
}


export default Footer;