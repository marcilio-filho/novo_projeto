import React from 'react';
const Conteudo = [
  {
    "id": 1,
    "title": "Exploring the Depths of the Ocean",
    "subtitle": "A Journey into the Unknown",
    "contents": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "id": 2,
    "title": "The Mysteries of Outer Space",
    "subtitle": "Unveiling the Secrets of the Cosmos",
    "contents": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": 3,
    "title": "Advancements in Artificial Intelligence",
    "subtitle": "Shaping the Future of Technology",
    "contents": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris."
  }
];

const id = 1;

const BlogArticle = () => {
  const firstArticle = Conteudo[id - 1]; // Get the first article from Conteudo

  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
        {/* Content */}
        <div className="lg:col-span-2">
          <div className="py-8 lg:pe-4 lg:pe-8">
            <div className="space-y-5 lg:space-y-8">
              <a className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                {/* Back to Blog */}
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Back to Blog
              </a>

              <h2 className="text-3xl lg:text-4xl lg:text-5xl dark:text-white">{firstArticle.title}</h2>

              <h3 className="text-2xl lg:text-3xl font-medium text-gray-800 dark:text-gray-200">{firstArticle.subtitle}</h3>

              <p className="text-lg text-gray-900 dark:text-gray-100">{firstArticle.contents}</p>

              {/* Rest of the article */}
              {/* ... */}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 space-y-5">
            {/* Sidebar content */}
            {/* ... */}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BlogArticle;
