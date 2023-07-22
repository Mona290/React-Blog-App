import { Link } from "react-router-dom";
import './topbar.css';

export default function TopList () {
  const user = false;

  return (
    <div className="top">
     <div className="topLeft">
      <i className="topIcon fa-brands fa-linkedin"></i>
      <i className="topIcon fa-brands fa-twitter"></i>
      <i className="topIcon fa-brands fa-instagram"></i>
     </div>
     <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">
          <Link  className="link" to="/" >Home</Link>
          </li>
        <li className="topListItem">
          <Link  className="link" to="/about" >About</Link>
        </li>
        <li className="topListItem">
          <Link  className="link" to="/contact" >Contact</Link>
          </li>
        <li className="topListItem">
        <Link  className="link" to="/write" >Write</Link>
        </li>
        <li className="topListItem">
          {user && "Logout"}
        </li>
      </ul>
     </div>
     <div className="topRight">
      {user ? (
        <img 
      className="topImg"
      src="https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg?auto=compress&cs=tinysrgb&w=600" alt=" "/>
      
      ):(
        <ul className="topList">
          <li className="topListItem">
        <Link  className="link" to="/login" >
          Login
          </Link>
          </li>
          <li className="topListItem">
        <Link  className="link" to="/register" >
          Register
          </Link>
          </li>
        </ul> 
      )
    }
      
      <i className="topSearchIcon fas fa-search"></i>
     </div>
     </div>
  );
}


