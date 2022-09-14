import './App.css';
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Main from './Components/Main.jsx'
import React from 'react';


function App (){
  return(
    <React.Fragment>

      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    
    </React.Fragment>  
  )
}

export default App;
