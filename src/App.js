
import './App.css';
import Component from './components/Component';
import CsForm from './components/CsForm';
import CsNav from './components/Nav';


// one component I can reuse as may times I want

function App() {
  // 

    
    // <div>
    // <h1>This is app component</h1>
    

    // <Component/>
    
    // </div>
  return (
  
    <div>
     <CsNav/>
      {/* <h1>This is React</h1> *
        <Component/> */}
<CsForm/>

    </div>
   
   
  
  );
}

export default App;
