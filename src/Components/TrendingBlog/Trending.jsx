import "./Trending.css";
import { Link } from "react-router-dom";
function Trending({blog}) {   
const categoryImages = {
    Programming: "programming.jpg",
    Cooking: "cooking.jpg",
    Workouts: "Fitness.jpg",
    Travelling: "Travelling.jpg",
    Health: "Health.jpg",
};
const image = categoryImages[blog.category] || "Banner.jpg";
 


    return(
        <Link to={`/Blog/${blog.id}`} style={{textDecoration:'none', color:'black'}} >
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={`/Media/${image}`} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-category text-muted">{blog.category}</p>
                <p className="card-text">{blog.previewDescription}</p>
            </div>
        </div>
        
        
        </Link>
    ) 
}
export default Trending;