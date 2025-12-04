import './Banner.css';
import React from 'react';
function Banner({title}) {
    return (
       <>
       <div className="Banner-div">
            <div className="overlay">
                <h1 id='banner-title'> {title || 'Welcome To our Blogs Website'}</h1>
            </div>
            <img src='/Media/Banner.jpg' alt="" width={'100%'} height={'650px'} style={{objectFit:'cover'}}/>
       </div>
       </>

    );
}   
export default Banner;
