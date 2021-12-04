import React, { useEffect, useState } from "react";
import "./App.css";
export default function Calc() {
  const [total, setTotal] = useState(0);
  const [isActive, setActive] = useState("");
  const [counter, setCounter] = useState("");
  const [gecici, setGecici] = useState(0);
  const btnDizi = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  useEffect(() => {}, [total]);
  function topla() {
    setActive("+");
    setGecici(counter);
    setTotal(parseInt(total) + parseInt(counter));
    setCounter("");

  }
  function cikar() {
    setActive("-");
    setGecici(counter);
    setTotal(parseInt(total) - parseInt(counter));
    setCounter("");
  }
  function carp() {
    setActive("*");
    setGecici(counter);
    setTotal(parseInt(total) * parseInt(counter));
    setCounter("");
  }
  function bol() {
    // setActive("/");
    // setGecici(counter);
    // setTotal(parseInt(total) / parseInt(counter));
    // setCounter(0);
    alert("Hatalı çalışıyor. Hata düzeltilene kadar pasif.")
  }
  function resetF() {
    setActive("");
    setTotal(0);
    setGecici(0);
  }
  function btn(item){
    setCounter(counter+item)
    
  }
  return (
    <div className="hesap-box">
      <div className="lbl-div">
        <label for="total" id="total" value="total" name="totaL">
          Total: {total}{" "}
        </label>
        <label for="islem" id="islem" value="islem" name="islem">
          Islem: {isActive}{" "}
        </label>
        <label for="gecici" id="gecici" value="gecici" name="gecici">
          Gecici: {gecici}{" "}
        </label>
      </div>
      <div>
        <input
          value={counter}
          name="counter"
          onChange={(e) => setCounter(e.target.value)}
        ></input>
      </div>
      <div className="box2">
        <button onClick={() => topla()}>+</button>
        <button onClick={() => cikar()}>-</button>
        <button onClick={() => carp()}>*</button>
        <button onClick={() => bol()}>/</button>
        <button onClick={() => resetF()}>C</button>
      </div>
      <div className="btn-dizi">
        {btnDizi.map((item) => (
          <button onClick={()=>btn(item)}>{item}</button>
        ))}
      </div>
    </div>
  );
}
