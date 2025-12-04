import Banner from '../../Components/Banner/Banner';
import './DedicatedBlog.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import blogs from  '../../Utils/MockData.js';
import { useParams } from 'react-router-dom';


function DedicatedBlog() {

    const [blogId, setBlogID]=useState();
    const { id } = useParams();
    const blogToDisplay = blogs.find(blog => blog.id === parseInt(id));
    useEffect(()=>{
        if(id){
            setBlogID(id);
        }
    },[])


    if (!blogToDisplay) {
        return (
          <>
            <Banner title="Welcome to our Dedicated Blog" />
            <h1>404 - Blog Not Found</h1>
            <p>The blog you are looking for does not exist.</p>
          </>
        );
      }

  return (
    <>

        <Banner/>
        <h1>{blogToDisplay.title}</h1>
        <h6>{blogToDisplay.category}</h6>
        <p>{blogToDisplay.content}</p>
    </>
  );
}   
export default DedicatedBlog;