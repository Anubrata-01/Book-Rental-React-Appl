const BookCard = ({ book }) => {
  return (
    <div className="shadow-lg p-4 rounded-lg bg-emerald-950">
      <div className="flex flex-col items-start">
        <a href="#">
          <img
            className="w-[170px] h-[210px] object-cover rounded-md"
            src={book?.cover}
            alt={book?.name}
          />
        </a>
        <div className=" mt-2 pl-0">
          <p className="font-semibold text-rose-800">{book?.title}</p>
          <p className="text-xs text-rose-500">{book?.genre}</p>
          <p className="text-yellow-500">{book?.rating}</p>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-300">
            <span className="font-semibold">{book?.price}</span> | <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

