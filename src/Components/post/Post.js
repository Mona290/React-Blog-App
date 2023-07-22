import "./post.css";


export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://media.istockphoto.com/id/1391392383/photo/the-view-on-mount-ungaran-semarang.jpg?s=612x612&w=0&k=20&c=OC-_0UBLY4v49jrM_fcT3NFKghownVppVCnXjx-MWJM="
        alt=""
        />
        
        <div className="postInfo">
          <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Life</span>
       </div>
       <span className="postTitle">
        Nature is love
        </span>
          <hr/>
        <span className="postDate">1 hour ago</span>
          </div>
          <p className="postDes">
          Mother Nature is the ultimate inspiration. 
          When you're feeling sluggish, 
          simply walking outside and getting fresh 
          air can do wonders for your mood and outlook. 
          Often, nature's beauty can take your breath 
          (and words) away.
          Mother Nature is the ultimate inspiration. 
          When you're feeling sluggish, 
          simply walking outside and getting fresh air 
          can do wonders for your mood and outlook. 
          Often, nature's beauty can take your breath 
          (and words) away.
          </p>
      </div>
    
  );
}

