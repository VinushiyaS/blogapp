import React from 'react';

 function BlogNav() {
  return (
    <nav className="blog-nav">
      <div className="container">
        <h1>Blog Platform</h1>
        <ul>
          <li><a href="#post1">JavaScript</a></li>
          <li><a href="#post2">Data Structure</a></li>
          <li><a href="#post3">Algorithm</a></li>
          <li><a href="#post4">Computer Network</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default BlogNav;