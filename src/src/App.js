import './App.css';
import Header from './component/Header';
import '../src/bootstrap/dist/css/bootstrap.min.css';
import Box from'./component/Box';
import Cards from './component/Cards';
import Css from '../src/image/Css.jpg';

import javascript from '../src/image/javascript.jpg';
import Html from '../src/image/Html.jpg';
import Rtjs from '../src/image/Reactjs.jpg';
function App() {
  return (
    <div className="App">
       <Header/>
       <header className="App-header">
      <Box/> 
      <div className='Cards'>
      <Cards imgsrc ={Html} alt="Html" Title="HTML" Button="80%"/>
  < Cards imgsrc={Css} alt="Css" Title="CSS" Button="70%"/>
  
 
  <Cards imgsrc ={javascript} alt="javascript" Title="Javascript" Button="60%"  />

  <Cards imgsrc={Rtjs} alt="Rtjs" Title="Reactjs" Button="50%"/>
  
  </div>
</header>
      </div>
    
  );
  }
  export default App;
