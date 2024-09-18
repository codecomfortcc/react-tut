import { useState } from "react";


const AnimatedPostCard = ({ key, title, content, tags, photoLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key= {key}
      className={`post-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container">
        <img src={photoLink} alt="Post image" className="img-view"/>
        <div className="overlay">
          <span>View Post</span>
        </div>
      </div>
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="description">{content}</p>
      </div>
    
      <div className="tags">
        {tags.map((tag,index)=>(
          <span key={index} className="tag">{`#${tag}`}</span>
        ))}
   
      </div>
    </div>
  );
};

export default AnimatedPostCard;
