import React from 'react';
import "./Header.css";
import "./building.css";

function Header(props) {
    console.log("heruko", props);
  return (
    <div>
        <h1>Home Component</h1>
            <div className="add-to-cart">
    {/* <span className="cart-count">{props.id.length}</span> */}
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="cart img" />
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cdn.imgbin.com/0/19/6/mobile-app-icon-virtual-reality-icon-T6zUx7ck.jpg" alt="mobile img"/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>
                        props.addToCartHandler()
                    }>
                        Add To Cart</button>
                </div>
            </div>

            <table class="employee-header">
       
       
       <tr>
           <th>ID  <img  src="images/Sort.png"  alt="logo" /></th>
           <th>Name <img  src="images/Sort.png"  alt="logo" /></th>
           <th>Email <img  src="images/Sort.png"  alt="logo" /></th>
           <th>Phone No </th>
           <th>DOB</th>
           <th>Role <img  src="images/Sort.png"  alt="logo" /></th>
           <th>Action</th>
       </tr>
  


   {/* {apartment.map((students, i) => {
     return (


       <tr>
           <td class="geeks">{students.uniqueID}</td>
           <td>{students.availability}</td>
           <td><a href="#" class="user-email">{students.bedroom}</a></td>
           <td>8989898989</td>
           <td>10/01/1990</td>
           <td>Developer</td>
           <td><button> <img
                 src="images/Edit.png"
                 alt="logo"
               /></button><button><img src="images/Del.png" alt="logo" /></button>
           
           </td>
       </tr>


     );
   })} */}
    </table>

        </div>
  
  )
}

export default Header