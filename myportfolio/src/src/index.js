import ReactDOM from "react-dom/client";
/*import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./component/Layout";
import Contact from "./component/Contact";
import Blogs from "./component/Blog";
import Home from "./Home";*/
import Apps from './App';
export default function App() {
  return (

   <Apps/>
  /*<BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
         
        </Route>
      </Routes>
    </BrowserRouter>*/
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

    
  















