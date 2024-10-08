import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue]= useState("")
  const inputHandler = (value) =>{
    setInputValue( inputValue+value);
  };
  const Clear = () => {
    setInputValue("");
  };
  const Calculate = () => {
    try {
      const result = eval(inputValue);
    setInputValue(result);
    } catch (error) {
      setInputValue("Error")
    }
  };
  const handleDelete = () => {
    if(inputValue?.length){
      let val = inputValue.substring(0, inputValue?.length-1);
      setInputValue(val);
    };
  }
  return (
    <div className="cal_container">
        <input value={inputValue} readOnly className="inputbox" />
        <div className='button-items'>
        <button className="col_buttom" onClick={Clear}>C</button>
        <button className="col_buttom" onClick={handleDelete}>del</button>
        <button className="col_buttom" onClick={()=>inputHandler("%")}>%</button>
        <button className="col_buttom" onClick={()=>inputHandler("/")}>/</button>

        <button onClick={()=>inputHandler("1")}>1</button>
        <button onClick={()=>inputHandler("2")}>2</button>
        <button onClick={()=>inputHandler("4")}>3</button>
        <button className="col_buttom" onClick={()=>inputHandler("*")}>*</button>

        <button onClick={()=>inputHandler("4")}>4</button>
        <button onClick={()=>inputHandler("5")}>5</button>
        <button onClick={()=>inputHandler("6")}>6</button>
        <button className="col_buttom" onClick={()=>inputHandler("-")}>-</button>

        <button onClick={()=>inputHandler("7")}>7</button>
        <button onClick={()=>inputHandler("8")}>8</button>
        <button onClick={()=>inputHandler("9")}>9</button>
        <button className="col_buttom" onClick={()=>inputHandler("+")}>+</button>

        <button onClick={()=>inputHandler("0")}>0</button>
        <button className="col_buttom" onClick={()=>inputHandler(".")}>.</button>
        <button className="equal" onClick={Calculate}>=</button>
    </div>
    </div>
  );
}

export default App;
