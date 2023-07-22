import "./singlePost.css";


export default function  SinglePost () {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
            src="https://images.pexels.com/photos/1796727/pexels-photo-1796727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="singlePostImg"
            />
            <h1 className="singlePostTitle">
            The green city is a clean city
            <div className="singlePostEdit">
               <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
               <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className= "singlePostAuthor">
                    Author: <b>Mona</b>
                </span>
            <span className= "singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDes">
          Clean and green environment is a basic need today. The environmental pollution in the form of air, water, and land pollution, has severely affected life. The air quality is unbreathable, water non-potable and the land contaminated,
           leading to many diseases. For earth to survive, the pollution must me tackled and reversed. A healthy life is possible only if the basic necessity of cleanliness of air and land is achieved. Clean and green environment imply absence of pollution and a better quality of life.</p>
            </div>
        </div>
            
      
    
  )
}


