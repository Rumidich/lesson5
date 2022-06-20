import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Pokemons = () => {
  const [data, setData] = useState([]);
  const [inp1Value, setInp1Value] = useState("");
  const [inp2Value, setInp2Value] = useState("");
  // console.log(inp1Value, inp2Value);

  //! callback отработает один раз при рендере страницы, так как
  //! массив зависимостей пустой
  // useEffect(() => {
  //   console.log("useEffect!");
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect!");
  // }, [inp1Value]);

  // useEffect(() => {
  //   console.log("useEffect!");
  // }, [inp1Value, inp2Value]);

  //! следит за изменениями во всех стейтах
  // useEffect(() => {
  //   console.log("useEffect!");
  // });

  return (
    <div>
      <input
        value={inp1Value}
        onChange={e => setInp1Value(e.target.value)}
        type="text"
        placeholder="input 1"
      />
      <input
        value={inp2Value}
        onChange={e => setInp2Value(e.target.value)}
        type="text"
        placeholder="input 2"
      />
      Bonjour, Rouslan!
    </div>
  );
};

export default Pokemons;
