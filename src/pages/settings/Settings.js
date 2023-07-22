import "./settings.css";
import Sidebar from "../../Components/sidebar/Sidebar";
export default function Settings  () {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsUpdateTitle">Delete your Account</span>
       </div>  
       <form className="settingsForm">
        <label>Profile Picture</label>
        <div className="settingsProfilePicture">
          <img
          src="https://img.freepik.com/free-photo/young-woman-programmer-sitting-companyfice-front-computer-with-pink-cup-professional-computer-engineer-looking-camera-smiling-software-work_116317-1299.jpg?size=626&ext=jpg"
          alt=""
          />
          <label htmlFor="fileInput">
          <i class="fa-solid fa-user"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>          
          </div>
          <label>Username</label>
          <input type="text" placeholder="mona"/>
          <label>Email</label>
          <input type="text" placeholder="mona@gmail.com"/>
          <label>Password</label>
          <input type="text" placeholder="Password"/>
          <button className="settingsSubmit">Update</button>
        </form> 
      </div>
      <Sidebar/>
    </div>
  );
}

