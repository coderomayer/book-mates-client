import { useState } from "react";

const AddBook = () => {

    const [AddProduct, setAddProduct] = useState()

    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const author = e.target.author.value;
        const category = e.target.category.value;

        const quantity = e.target.quantity.value;
        const rating = e.target.rating.value;
        const image = e.target.image.value;
        const description = e.target.description.value;

        const newProduct = { name,author, category, quantity, rating, image, description }
        console.log(newProduct);

        setAddProduct('')

        // Send Data to server

        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.insertedId) {
                    setAddProduct('Product aded succesfully')
                }
            })



    }

    return (

        <div className="bg-stone-500 p-8 sm:p-24">

            <form onSubmit={handleAddProduct} className="bg-slate-400 p-8 sm:p-24 md:w-1/2 mx-auto rounded flex flex-col gap-4 items-center justify-center">

                <input type="text" name="name" placeholder="Book Name" className=" px-6 py-2 rounded w-full " />
                <input type="text" name="author" placeholder="Author Name" className=" px-6 py-2 rounded w-full " />



                <select
                    name="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected>Choose a Category</option>
                    <option>History</option>
                    <option>Romance</option>
                    <option>Fantasy</option>
                    <option>Science Fiction</option>
                </select>



                <input type="text" name="quantity" placeholder="quantity" className=" px-6 py-2 rounded w-full " />


                <input type="text" name="rating" placeholder="Rating" className=" px-6 py-2 rounded w-full " />
                <input type="text" name="image" placeholder="IMG URL" className=" px-6 py-2 rounded w-full " />
                <input type="message" name="description" placeholder="Description" className=" px-6 py-2 rounded w-full " />

                <button className="bg-black w-full rounded text-white p-2">Add Book</button>

                <div className=" w-full">
                    {
                        AddProduct && <h2 className="bg-lime-700 p-4 rounded text-white  ">{AddProduct}</h2>
                    }
                </div>

            </form>
        </div>
    )
}

export default AddBook;