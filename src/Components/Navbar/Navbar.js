// import React, { useState } from 'react';
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);
//     return (
//         <>
//         <div className="navbar">
//             <div className="navbar-container">           
//                 <Link to="/" className="navbar-logo">
//                     Corebiz
//                 </Link>
//                 <div className="menu-icon" onClick={handleClick}>
//                     {click ? <FaTimes/> : <FaBars />}
//                 </div>
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                     <li className="nav-item">
//                         <Link to ='/' className="nav-links">
//                            <p>a corebiz</p> 
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to ='/' className="nav-links">
//                             <p>serviços</p> 
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to ='/' className="nav-links">
//                         <p>cases</p> 
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link to ='/' className="nav-links">
//                             <p>contato</p> 
//                         </Link>
//                     </li>
                    
//                 </ul>
//             </div>
//         </div>                        
//         </>
//     )
// }

// export default Navbar
