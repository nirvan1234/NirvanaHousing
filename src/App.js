
import HomeContainer from '../src/containers/HomeContainers';
import HeaderContainer from './containers/HeaderContainer';
import BuildingContainer from './containers/BuildingContainer';
import Navbar from './components/Navbar';
import {BrowserRouter,Route, Routes} from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/details" element={<HeaderContainer/>} />
          <Route path="/building" element={<BuildingContainer/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
    
  );
}

export default App;
