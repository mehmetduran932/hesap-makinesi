import React, { useEffect, useState } from "react";
import "./App.css";
export default function Calc() {
  const [total, setTotal] = useState(0);
  const [isActive, setActive] = useState("");
  const [counter, setCounter] = useState(0);
  const [gecici, setGecici] = useState(0);
  const btnDizi = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  useEffect(() => {}, [total]);
  function topla() {
    setActive("+");
    setGecici(counter);
    setTotal(parseInt(total) + parseInt(counter));
    setCounter(0);
  }
  function cikar() {
    setActive("-");
    setGecici(counter);
    setTotal(parseInt(total) - parseInt(counter));
    setCounter(0);
  }
  function carp() {
    setActive("*");
    setGecici(counter);
    setTotal(parseInt(total) * parseInt(counter));
    setCounter(0);
  }
  function bol() {
    setActive("/");
    setGecici(counter);
    setTotal(parseInt(total) / parseInt(counter));
    setCounter(0);
  }
  function resetF() {
    setActive("");
    setTotal(0);
  }
  return (
    <div className="hesap-box">
      <div>
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
      <div>
        <button onClick={() => topla()}>+</button>
        <button onClick={() => cikar()}>-</button>
        <button onClick={() => carp()}>*</button>
        <button onClick={() => bol()}>/</button>
        <button onClick={() => resetF()}>C</button>
      </div>
      <div>
        {btnDizi.map((item) => (
          <button onClick={()=>setCounter(item)}>{item}</button>
        ))}
      </div>
    </div>
  );
}
