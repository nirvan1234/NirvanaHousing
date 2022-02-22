import React from 'react'
import "./Home.css";

function Home() {
  
    return (
        <div className = "continer main_header">
        <div className = "row">
     <div className = "col-md-6 col-6 main_header_left">
         <h2> Looking for a Property!</h2>
         <h1> Buy and Sell Properties at Right Price</h1>
         <a href="/lux/building"> <button> Details</button></a>
         </div>
      
     <div className = "col-md-6 col-6 main_header_right">
         <figure>
              <img src= "https://i.pinimg.com/736x/d3/59/1c/d3591c63b81ba14696e290f74743e1de--animated-gifs-rani.jpg"  alt="thapa" className="img-fluid" title = "thapa-technical" />
         </figure>
     </div>
 </div>
 </div>
    )
}
export default Home