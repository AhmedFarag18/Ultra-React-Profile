import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Contact from "./components/Contact/Contact"
import Footer from './components/Footer/Footer';
import Index from "./components/Index/Index"
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div>
        <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Index/>}/>
                    <Route path='/contact' element={<Contact/>} />
                </Routes>
                <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;