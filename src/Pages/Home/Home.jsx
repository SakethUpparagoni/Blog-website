import React from 'react';
import './Home.css';
import Banner from '../../Components/Banner/Banner.jsx';
import Trending from '../../Components/TrendingBlog/Trending.jsx';
import blogs from  '../../Utils//MockData.js';
import { Link } from 'react-router-dom';
function Home() {
    return(
        <>
            <Banner title="Welcome To our Blogs Website" />
            <div className="my-2">
                 <h1>Read Blogs from</h1>
                    <div className="">
                        <div className="read-blogs-section">

                             <Link to={'/Blogs/Programming'} style={{textDecoration:'none', color:'black'}}>
                            <div className="card" style={{width: '18rem'}}>
                                <img className="card-img-top" src="/Media/programming.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                    <h5 className="card-title">Programming</h5>
                                </div>
                            </div>
                        </Link>

                        <Link to={'/Blogs/Cooking'} style={{textDecoration:'none', color:'black'}}>
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="/Media/cooking.jpg" alt="Card image cap"/>
                           <div className="card-body">
                                <h5 className="card-title">Cooking</h5>
                             </div>
                     </div>
                    </Link>

                    <Link to={'/Blogs/Workouts'} style={{textDecoration:'none', color:'black'}}>
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top" src="/Media/Fitness.jpg" alt="Card image cap"/>
                           <div className="card-body">
                                <h5 className="card-title">Workouts</h5>
                             </div>
                        </div>
                    </Link>
                     <Link to={'/Blogs/Travelling'} style={{textDecoration:'none', color:'black'}}>
                            <div className="card" style={{width: '18rem'}}>
                                <img className="card-img-top" src="/Media/Travelling.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                    <h5 className="card-title">Travelling</h5>
                                </div>
                            </div>
                        </Link>
</div>
                       
                    </div>
            </div>


            <div className="trending-blogs-section">
                <h1>
                    Trending Blogs
                </h1>

                <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
                  {
                    blogs.map(blog=>
                        <Trending blog={blog}/>
                    )
                  }
                   

                </div>
                 

            </div>

        </>
    ) 
}

export default Home;