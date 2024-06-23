import BookCard from "../books/BookCard";
import { getAllBooks } from "../books/book"

const Trending = () => {
  const books=getAllBooks();
  const trending_books=books.filter((book)=> book?.rating === 5);

  return (
    <div className=" w-[700px] h-[500px] border-2 text-white absolute left-80 top-20">
      <div className=" relative w-full h-full grid sm:grid-cols-3 xl:grid-cols-4 gap-4 pl-4 overflow-y-scroll">
        {trending_books?.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  )
}

export default Trending