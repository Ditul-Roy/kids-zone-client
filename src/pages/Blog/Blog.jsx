import React from 'react';
import useTitleBar from '../../shared/TitleBar/UseTitleBar';

const Blog = () => {
    useTitleBar('blog')
    return (
        <div>
            <h1>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <h1>Compare SQL and NoSQL databases?</h1>
            <h1>What is express js? What is Nest JS (google it)?</h1>
            <h1>What is MongoDB aggregate and how does it work (google it)?</h1>
        </div>
    );
};

export default Blog;