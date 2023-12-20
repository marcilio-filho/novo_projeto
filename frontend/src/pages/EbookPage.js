import React from 'react';
import ArticleComponent from '../components/organisms/ArticleComponent';

const EbookPage = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center my-8">E-Book Page</h1>
            
            <p className="mb-4">Welcome to our E-Book page. Here you will find interesting articles to read and interact with.</p>
            
            {/* Importing the ArticleComponent */}
           <ArticleComponent />

            <p className="mt-4">Enjoy reading and customizing your experience!</p>
        </div>
    );
};

export default EbookPage;
