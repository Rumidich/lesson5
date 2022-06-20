import React from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Users from "./components/Users/Users";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";

const App = () => {
  return (
    // <div>
    //   {/* <Pokemons /> */}
    //   <Header />
    //   <Pokemons2 />
    //   <RickAndMorty />
    //   <Users />
    // </div>
    //? указываем что роутинг будет в бразуере
    <BrowserRouter>
      {/* header будет на всех наших страницах*/}
      <Header />
      {/* для перечисления роутов*/}
      <Routes>
        {/* непосредственно сами роуты*/}
        <Route path="/" element={<h1>Homepage</h1>} />

        <Route path="/pokemons2" element={<Pokemons />} />
        <Route path="/pokemons-2" element={<Pokemons2 />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      {/* футер будет на всех страницах */}
      <h1>Footer</h1>
    </BrowserRouter>
  );
};

export default App;
