import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function btn1() {
    document.getElementById("innerContainer").style.backgroundColor = "#e0e0e0";
    document.getElementById("backgroundcolor").value ="Background Color:";
    document.getElementById("p1").innerHTML="#e0e0e0";
  }

  function btn2() {
    document.getElementById("innerContainer").style.backgroundColor = "#6fcf97";
    document.getElementById("backgroundcolor").value ="Background Color : ";
    document.getElementById("p1").innerHTML="#6fcf97";
  }
  function btn3() {
    document.getElementById("innerContainer").style.backgroundColor = "#56ccf2";
    document.getElementById("backgroundcolor").value ="Background Color : ";
    document.getElementById("p1").innerHTML="#56ccf2";
  }
  function btn4() {
    document.getElementById("innerContainer").style.backgroundColor = "#bb6bd9";
    document.getElementById("backgroundcolor").value ="Background Color :  ";
    document.getElementById("p1").innerHTML="#bb6bd9";
  }


   
     function clrchange1(){
      
      document.getElementById("btntraffic1").style.backgroundColor = "red";
      document.getElementById("stop").style.backgroundColor = "red";
      // btntraffic2.disabled=true;
      // btntraffic3.disabled=true;
          
   }

   function clrchange2(){      
    document.getElementById("btntraffic2").style.backgroundColor = "yellow";
  document.getElementById("ready").style.backgroundColor = "yellow";    
   
}

function clrchange3(){      
  document.getElementById("btntraffic3").style.backgroundColor = "green";
document.getElementById("go").style.backgroundColor = "green";

}
// function btncolorchange(){
//   if(button.id==btntraffic1)
//     {
//     document.getElementById("btntraffic1").style.backgroundColor = "red";
//       document.getElementById("stop").style.backgroundColor = "red";
//       btntraffic2.disabled=true;
//       btntraffic3.disabled=true;
// }
//       else if(button.id==btntraffic2)
//         {
//           document.getElementById("btntraffic2").style.backgroundColor = "yellow";
//   document.getElementById("ready").style.backgroundColor = "yellow";  
//   btntraffic1.disabled=true;
//       btntraffic3.disabled=true;  

//         }
//         else(button.id==btntraffic3)
//         {
//           document.getElementById("btntraffic3").style.backgroundColor = "green";
// document.getElementById("go").style.backgroundColor = "green";
// btntraffic2.disabled=true;
//       btntraffic1.disabled=true;

//         }
// }


  return (
    <>
      {/* ///color picker container */}
      <div className="color-pick-container">
        <div className="inner-container" id="innerContainer">
          <h1 className="colorpicker">Color Picker</h1>
          <div className="btncolor-container">
            <button
              className="btncolor1"
              type="button"
              name="btn1"
              onClick={btn1}
            >
              #e0e0e0
            </button>
            

            <button
              className="btncolor2"
              type="button"
              name="btn2"
              onClick={btn2}
            >
              #6fcf97
            </button>
            <button
              className="btncolor3"
              type="button"
              name="btn3"
              onClick={btn3}
            >
              #56ccf2
            </button>
            <button
              className="btncolor4"
              type="button"
              name="btn4"
              onClick={btn4}
            >
              #bb6bd9
            </button>
          </div>
          <div>
            <input
              type="text"
              id="backgroundcolor"
              className="backgroundcolor"
              value=" Background Color:" ></input>
              <p id="p1" className="p1" value=""> #fffff </p> 
            <p className="info">
              Try clicking on one of the colors above to change the background
              color of this page!
            </p>
          </div>
        </div>
      </div>


      {/* ///traffic signal container */}
      <div className="traffic-signal-container">
        <div className="traffic-inner-container">
          <div><h1 className="traffich1">Traffic Signal</h1></div>
          <div className="btntraffic-Container">
            <button type="button" id="btntraffic1" className="btntraffic1" onClick={clrchange1}>Stop</button>
            <button type="button" id="btntraffic2" className="btntraffic2" onClick={clrchange2}>Ready</button>
            <button type="button" id="btntraffic3" className="btntraffic3" onClick={clrchange3}>Go</button>
          </div>

          <div className="display-container">
            <input type="text" id="stop" value=""></input>
            <input type="text" id="ready" value=""></input>
            <input type="text" id="go" value=""></input>

          </div>

        </div>
      </div>
    </>
  );
}

export default App;
