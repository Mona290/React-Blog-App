import "./sidebar.css";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src = "https://img.freepik.com/premium-photo/nature-wallpaper-beautiful-nature-wallpaper-4k-nature-wallpapers-hd-nature-wallpaper-green-nature_722194-232.jpg?w=2000" alt=""/>
               <p>"Mountains are the beginning and the end of all natural scenery."</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                 <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                 </ul>
                 </div>
                 <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                       <i className="sidebarIcon fa-brands fa-linkedin"></i>
                       <i className="sidebarIcon fa-brands fa-twitter"></i>
                       <i className="sidebarIcon fa-brands fa-instagram"></i>
     
             </div>    
            </div>
            </div>
            
    )
}