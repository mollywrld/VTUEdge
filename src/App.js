import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <div className='nav-bg'>
    <Navbar/>
    </div>
    <div className='dashbg'>
    <Dashboard/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
