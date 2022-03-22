import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyPhoto from './Component/Profile/ProfilePhoto';
import Myname from './Component/Profile/FullName';
import MyAdress from './Component/Profile/Adress';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
    <div className='container mt-5 mb-5 '  style={{height: "100%",width:"100%",marginLeft: "200px", marginRight: "200px"}}>
        <div >

       
            <div className="col-lg-6" >

                <div className="card">
                    <div className="div1 card-body">
                        <p className="photo "> <MyPhoto></MyPhoto></p>

                        <div className='bloc'>
                        <p className=" name fw-bold lh-1 mb-3">  <Myname></Myname></p>
                        <p className="adress card-text fw-bold lh-1 mb-3"><MyAdress></MyAdress></p>
                        </div>
                        
                    </div>

                   
                </div>
        
                </div>
                </div>
                </div>

      
    </div>
  );
}
/*import React from "react";
const App = () => {
  return (
    <>
      <h2>Hello from my first component !!</h2>
    </>
  );
};
export default App;

*/



/*const App = () =>(
  <div>
    <MyPhoto/>
    <Myname/>
    <MyAdress/>
  </div>
);*/
export default App;