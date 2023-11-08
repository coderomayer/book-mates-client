const CategoryCard = ({book}) => {

    return (
        <div>
            <a href="">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-lg ">

                    <img className="rounded-t-lg h-48 w-full object-cover" src={book.image} alt="" />

                    <div className="p-5">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center font-serif ">{book.categoryName}</h5>

                    </div>
                </div>

            </a>
        </div>
    )
}

export default CategoryCard;