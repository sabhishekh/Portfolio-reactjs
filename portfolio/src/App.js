import './App.css';
import Header from './Mycomponent/Header';
import '../src/bootstrap/dist/css/bootstrap.min.css';
import Box from'./Mycomponent/Box';
import Cards from './Mycomponent/Cards';
import Css from './Css.jpg';
import boot from './boot.jpg';
import javascript from './javascript.jpg';
import Html from './Html.jpg';






function App() {
  return (
    <div className="App">
       <Header/>
       <header className="App-header">
      <Box/> 
      <div className='cards-cantainer'>
  < Cards imgsrc={Css} alt="Css" Title="Cascading Style sheet" Text="Css stand for cascading style sheet and css are used attractive and design </br>
  "/>
  <Cards imgsrc={boot} alt="boot" Title="Bootstrap.."/>
  <Cards imgsrc ={javascript} alt="javascript" Title="Javascript"/>
  <Cards imgsrc ={Html} alt="Html"/>
  </div>

       
      </header>
      
      
      
    </div>
    
  );
}

export default App;