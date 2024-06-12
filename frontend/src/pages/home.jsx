import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full border border-separate border-spacing-2 rounded-md">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2 rounded-md">No</th>
                <th className="border border-slate-600 p-2 rounded-md">Title</th>
                <th className="border border-slate-600 p-2 rounded-md max-md:hidden">Author</th>
                <th className="border border-slate-600 p-2 rounded-md max-md:hidden">Publish Year</th>
                <th className="border border-slate-600 p-2 rounded-md">Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="h-8">
                  <td className="border border-slate-700 p-2 text-center rounded-md">{index + 1}</td>
                  <td className="border border-slate-700 p-2 text-center rounded-md">{book.title}</td>
                  <td className="border border-slate-700 p-2 text-center rounded-md max-md:hidden">{book.author}</td>
                  <td className="border border-slate-700 p-2 text-center rounded-md max-md:hidden">{book.publishYear}</td>
                  <td className="border border-slate-700 p-2 text-center rounded-md">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
