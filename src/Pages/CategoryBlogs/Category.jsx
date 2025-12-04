import { useState, useEffect } from 'react';
import './Category.css';
import Banner from '../../Components/Banner/Banner.jsx';
import Trending from '../../Components/TrendingBlog/Trending.jsx';
import blogs from '../../Utils/MockData.js';
import { useParams } from 'react-router-dom';

function Category() {
  const { category } = useParams();
  const [categoryBlogs, setCategoryBlogs] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredBlogs = blogs.filter(blog => blog.category === category);
      setCategoryBlogs(filteredBlogs);
    }
  }, [category]);

  return (
    <>
      <Banner title={`Welcome to our ${category} Blogs`} />
      <div className="trending-blogs-section">
        <h1>{category} Blogs</h1>
        <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
          {categoryBlogs.map(blog => (
            <Trending key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;