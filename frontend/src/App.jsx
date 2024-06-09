import React from "react";
import { Routes, Route } from 'react-router-dom' 
import home from "./pages/home";
import createBook from "./pages/createBook";
import editBook from "./pages/editBook";
import deleteBook from "./pages/deleteBook";
import showBook from "./pages/showBook";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<home/>} />
      <Route path="/books/create" element={<createBook/>} />
      <Route path="/books/details/:id" element={<showBook/>} />
      <Route path="/books/edit/:id" element={<editBook/>} />
      <Route path="/books/delete/:id" element={<deleteBook/>} />
    </Routes>
  )
}

export default App