
import './App.css';
import CsForm from './components/CsForm';
import CsNav from './components/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Data from './components/Data';
import Update from './components/Update';
import UpdateStudents from './components/UpdateStudents';

// one component I can reuse as may times I want



function App() {

  

    
    // <div>
    // <h1>This is app component</h1>
    

    // <Component/>
    
    // </div>
  return (
  
    <div>

    <BrowserRouter>
  <Routes>
   <Route exact path='/' Component={Home}></Route>
   <Route exact path='/user' Component={CsForm}/>
   <Route exact path="/list" Component={Data}/>
   <Route exact path='/user/update/:id' Component={Update}/>
   <Route exact path='/student/update/:id' Component={UpdateStudents}/>
  </Routes>

  </BrowserRouter>
    
    
{/* <CsForm/> */}

    </div>
   
   
  
  );
}

export default App;
