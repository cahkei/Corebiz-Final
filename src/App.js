// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Content2 from './Components/Content/Content2';

function App() {
  return (
    <Router>
      <Header/>
      <Content2/>
      <Footer/>
    </Router>
    
  );
}

export default App;
