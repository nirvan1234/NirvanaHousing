import React,{useState,useEffect , useRef} from 'react';
import "./building.css";
import axios from "axios";
import Modal from './Model';
// import {useDispatch, useSelector} from "react-redux";
// import { loadUsers } from '../Services/Actions/actions';

function Building(props) {
    const [apartment, setApartment] = useState([]);
    const [secondTimeData,setsecondTimeData]= useState([])
    const [bed , setBed] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const inputE1 = useRef("");
    const [isOpen, setIsOpen] = useState(false);
    const [student, setStudent] = useState([]);
    // const [searchTerm , setSearchTerm] = useState();
    //const flats = props.data[0].cardData;
    // let dispatch = useDispatch();
    // const {users} = useSelector(state => state.users )

    console.log("users", bed)
  

     //console.log(bed);

    useEffect(() => {
        getAllApartment();
        getSearchTerm();
        getSearchCost();
        getSearchFloor();
        // dispatch(loadUsers());
      },[]);

    async function getAllApartment() {
        try {
          const apartments = await axios.get("http://localhost:3005/posts");
          setApartment(apartments.data);
          setsecondTimeData(apartments.data)
        } catch (error) {
          console.log("something is wrong");
        }
      }

   const getSearchTerm = (e)=> {
      const search = e
      console.log("serch",search);
     const filteredNames = secondTimeData.filter( (item) => item.bedroom.includes(search))
    // console.log("filterredNames",filteredNames)
     setApartment(filteredNames);
    
   }


   const getSearchFloor = (e)=> {
    const search = e
    console.log("second", search)
   const filteredNames = secondTimeData.filter( (item) => item.floor.includes(search))
   setApartment(filteredNames);
 }

 const getSearchArea = (e)=> {
  const search = e
  console.log("third", search)
//  const filteredNames = secondTimeData.filter( (item) => item.grossm2.includes(search))
 const filteredNamestwo = secondTimeData.filter( function (item) {
   return ( item.grossm2 >= (search -100) && item.grossm2 <= search);
 })
 console.log("thirdhaina", filteredNamestwo)
 //setApartment(filteredNames);
 setApartment(filteredNamestwo);
}

const getSearchCost = (e)=> {
  const sea = e
  // const filteredNamesNew = secondTimeData.filter( (item) => item.grossm2)
  // const rounded = Math.round(filteredNamesNew);
  console.log("sh", sea);
  const filteredNamesthree = secondTimeData.filter( function (item) {
    return ( item.price >= (sea -10000000) && item.price <= sea);
  })
  
 setApartment(filteredNamesthree);
}
const showDetails = (e) => {
  setBed(e);
  setIsOpen(true);

}

// const flatEach = async (id) => {
//   await axios.get(`http://localhost:3005/posts/${id}`);
//   var newstudent = apartment.filter((item) => {
//     return item.uniqueID == id;
//   });
//   setStudent(newstudent);
//    setModalOpen(false)
  
// };
// const flatEach =(e)=> {
//   const search = e
//   console.log("olaa",e);
//   const filteredFlats = secondTimeData.filter((item)=> item.aptNo.includes(search))
//   setStudent(filteredFlats);
//   console.log("flats", filteredFlats)
// }
  return (
    <div>

<Modal open={isOpen} onClose={() => setIsOpen(false)}>
<div style={{ padding:'18px',margin:'8px'}}>
    <div style={{display:"flex"}}><h5>Apartment No:</h5>&nbsp;&nbsp;&nbsp;&nbsp;<p>{bed.aptNo}</p></div>
    <div style={{display:"flex"}}><h5>Bedrooms</h5>&nbsp;&nbsp;&nbsp;&nbsp;<p>{bed.bedroom}</p></div>
    <div style={{display:"flex"}}><h5>Floor</h5>&nbsp;&nbsp;&nbsp;&nbsp;<p>{bed.floor}</p></div>
    <div style={{display:"flex"}}><h5>Area</h5>&nbsp;&nbsp;&nbsp;&nbsp;<p>{bed.grossm2}mSquare</p></div>
    <div style={{display:"flex"}}><h5>Block No:</h5> &nbsp;&nbsp;&nbsp;&nbsp;<p>{bed.blockNew}</p></div>
    <div style={{display:"flex"}}><h5>Bedrooms</h5> &nbsp;&nbsp;&nbsp;&nbsp;<p>{bed.bedroom}</p></div>
    <div style={{display:"flex"}}><h5>Price</h5>  &nbsp;&nbsp;&nbsp;&nbsp;<p>{bed.price}</p></div>
    <div style={{display:"flex"}}><h5>Availability</h5>  &nbsp;&nbsp;&nbsp;&nbsp;<p>{bed.availability}</p></div>
</div>
               <div className="labuttonew">
    <button type="button" className="labfour" className="btn btn-outline-success float-right"
     style={{ backgroundColor: "green", color: "white" ,padding:'8px', width:'100px',marginRight:'8px'}}
     type="submit"  className ="btn btn-info">Save</button><span>  </span>
		<button type="button"className="btn float-left"
    style={{backgroundColor:" #717171", color:"white",padding:'8px', width:'100px'}}
     type="submit"  onClick={()=> setIsOpen(false)} >Cancel</button>
    </div>
      </Modal>

            <table class="employee-header">
       <tr>
           <th> FlatNo 
           </th>
           <th>Bedrooms
           <select  onChange={(e) => getSearchTerm(e.target.value)}>
                <option value="">All</option>
                <option value="1+1">One</option>
                <option value="2+1">Two</option>
                <option value="3+1">Three</option>
                <option value="4+1">Four</option>
            </select> </th>
           <th>Floor
           <select onChange={(e) => getSearchFloor(e.target.value)}>
                <option value="">All</option>
                <option value="1.KAT">One</option>
                <option value="2.KAT">Two</option>
                <option value="3.KAT">Three</option>
                <option value="4.KAT">Four</option>
            </select> </th>
           <th>Area 
           <select onChange={(e) => getSearchArea(e.target.value)}>
                <option value="">All</option>
                <option value="100">0-100</option>
                <option value="200">100-200</option>
                <option value="300">200-300</option>
                <option value="400">300-400</option>
            </select>
           </th>
           <th>Prices
           <select onChange={(e) => getSearchCost(e.target.value)}>
                <option value="">All</option>
                <option value="10000000">0-10000000</option>
                <option value="20000000">10000001-20000000</option>
                <option value="30000000">20000001-30000000</option>
                <option value="40000000">30000001-40000000</option>
                <option value="50000000">40000001-50000000</option>
            </select> </th>
           <th>   </th>
       </tr>
  


   {apartment.map((students, i) => {
     return (

       <tr>
           <td class="geeks">{students.aptNo}</td>
           <td>{students.bedroom}</td>
           <td>{students.floor}</td>
           <td>{students.grossm2}</td>
           <td>{students.price}</td>
           {/* <td><button onClick={()=> setIsOpen(true)}> Details</button>
           
           </td> */}
           <td><button onClick={(e) => showDetails(students)}> Details</button>
           
           </td>
       </tr>


     );
   })}
    </table>

        </div>
  )
}

export default Building