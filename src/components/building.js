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

    // console.log("users", props.data)
  

     //console.log(bed);

    useEffect(() => {
        getAllApartment();
        flatEach();
        // getSearchTerm();
        // dispatch(loadUsers());
      },[]);

    async function getAllApartment() {
        try {
          const apartments = await axios.get("http://localhost:3005/posts");
          console.log("apratment data",apartment)
          setApartment(apartments.data);
          setsecondTimeData(apartments.data)
        } catch (error) {
          console.log("something is wrong");
        }
      }

   const getSearchTerm = (e)=> {
      console.log(e);
      const search = e
      // console.log("serch",search);
     const filteredNames = secondTimeData.filter( (item) => item.bedroom.includes(search))
    // console.log("filterredNames",filteredNames)
     setApartment(filteredNames);
    
   }


   const getSearchFloor = (e)=> {
    console.log(e);
    const search = e
    console.log("serch",search);
   const filteredNames = secondTimeData.filter( (item) => item.floor.includes(search))
  console.log("filterredNames",filteredNames)
   setApartment(filteredNames);
 }

 const getSearchArea = (e)=> {
  console.log(e);
  const search = e
  console.log("serch",search);
 const filteredNames = secondTimeData.filter( (item) => item.grossm2.includes(search))
console.log("filterredNames",filteredNames)
 setApartment(filteredNames);
}

const getSearchCost = (e)=> {
  console.log(e);
  const search = e
  console.log("serch",search);
  // const filteredNamesNew = secondTimeData.filter( (item) => item.grossm2)
  // const rounded = Math.round(filteredNamesNew);
  // console.log("sh",rounded);
  
 const filteredNames = secondTimeData.filter( (item) => Math.floor(item.grossm2).includes(search))
console.log("filterredNames",filteredNames)
 setApartment(filteredNames);
}

const flatEach = async (id) => {
  await axios.get(`http://localhost:3005/posts/${id}`);
  var newstudent = apartment.filter((item) => {
    return item.uniqueID == id;
  });
  setStudent(newstudent);
   setModalOpen(false)
  
};
  return (
    <div>

<Modal open={isOpen} onClose={() => setIsOpen(false)}>

     
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
                <option value="0">100-200</option>
                <option value="200">200-300</option>
                <option value="300">300-400</option>
            </select>
           </th>
           <th>Prices
           <select onChange={(e) => getSearchCost(e.target.value)}>
                <option value="">All</option>
                <option value="0-10000000">0-10000000</option>
                <option value="10000001-20000000">10000001-20000000</option>
                <option value="20000001-30000000">20000001-30000000</option>
                <option value="30000001-40000000">30000001-40000000</option>
                <option value="40000001-50000000">40000001-50000000</option>
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
           <td><button onClick={()=> setIsOpen(true)} > Details</button>
           
           </td>
       </tr>


     );
   })}
    </table>

        </div>
  )
}

export default Building