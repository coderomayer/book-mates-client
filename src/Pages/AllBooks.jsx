import { useLoaderData } from "react-router-dom";

const AllBooks = () => {

    const allBoks = useLoaderData();
    console.log(allBoks);

    return (
        <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4 p-8 md:p-24">
            {
                allBoks.map(book => {
                    return (
                        <div>

                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-lg ">

                                <div className="bg-slate-100 p-8 flex items-center justify-center">
                                    <img className="rounded-t-lg w-2/4 object-cover" src={book.image} alt="" />
                                </div>

                                <div className="p-5">

                                    <h5 className="mb-2 text-2xl font-bold tracking-tight font-serif ">{book.name}</h5>

                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-amber-700 ">{book.author}</h5>
                                    
                                    <h5 className="mb-2 text-xl font-semibold tracking-tight  ">{book.category}</h5>

                                </div>
                            </div>


                        </div>
                    )
                })
            }
        </div>
    )

}


export default AllBooks;