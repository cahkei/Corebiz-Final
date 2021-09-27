// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Content/>
      <Footer/>
    </Router>
    
  );
}

export default App;
