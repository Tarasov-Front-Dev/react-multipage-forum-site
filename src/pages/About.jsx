import React from 'react';

const About = function() {
  return(
    <div className='about__article'>

      <h1>
        Multipage forum site created by using React
      </h1>
      <hr></hr>
      <p>Site fetchs posts from remote database, sorts it and presents in selected order. You can like post, remove it or add your own. Also you can click on post and see post comments.</p>
      <h2>In project was used</h2>
      <hr></hr>
      <ul>
        <li><a target={'_blank'} href='https://nodejs.org/'>Node.js</a> (v18.15.0)</li>
        <li><a target={'_blank'} href='https://react.dev/'>React</a> (v18.2.0)</li>
        <li><a target={'_blank'} href='https://github.com/axios/axios'>Axios</a> (v1.3.4)</li>
        <li><a target={'_blank'} href='https://reactrouter.com/'>React Router Dom</a> (v6.4)</li>
        <li><a target={'_blank'} href='https://reactcommunity.org/react-transition-group/'>React Transition Group</a> (v4.4.5)</li>
        <li>Custom hooks (like useFetching, usePosts, useSortedPosts)</li>
      </ul>

      <h2>You can see in project</h2>
      <hr></hr>
      <ul>
        <li>Five different pages to show you content;</li>
        <li>Seven reusable UI components:
          <ul>
            <li className='about__listItem'><span>MyButton</span></li>
            <li className='about__listItem'><span>MyInput</span></li>
            <li className='about__listItem'><span>MyLoader</span></li>
            <li className='about__listItem'><span>MyModal</span></li>
            <li className='about__listItem'><span>MyPagination</span></li>
            <li className='about__listItem'><span>MySelect</span></li>
            <li className='about__listItem'><span>Navbar</span></li>
          </ul>
        </li>
        <li>Six hand-made components:
          <ul>
            <li className='about__listItem'><span>AppRouter</span></li>
            <li className='about__listItem'><span>Counter</span></li>
            <li className='about__listItem'><span>PostFilter</span></li>
            <li className='about__listItem'><span>PostForm</span></li>
            <li className='about__listItem'><span>PostItem</span></li>
            <li className='about__listItem'><span>PostList</span></li>
          </ul>
        </li>
        <li>One PostSevice API.</li>
        <li>Pagination, transitions, and other fancy and stylish features.</li>
      </ul>

      <h2>Project features</h2>
      <hr></hr>
      <ul>
        <li>Log you in and remember you (by Context.Provider). So you'll stay logged in even if you reload the page.</li>
        <li>Fetch posts from <a target={'_blank'} href='https://jsonplaceholder.typicode.com/'>https://jsonplaceholder.typicode.com/</a>.</li>
        <li>Sort posts by title, body or id (jsonplaceholder didn't provide date at their posts, but I made sort by post.date as well).</li>
        <li>Let you write your own post, like some or delete them.</li>
        <li>You can click on post and see it's comment section.</li>
      </ul>
      <p className='about__article__last__p'>N.B. GitHub doesn't provide correct support for Routes so you can download project and run it on your own PC to make sure that everything works just fine! Don't forget to delete homepage prop from package.json. It was added only for GitHub-pages.</p>

      <h2>To run project on your PC you should</h2>
      <hr></hr>
      <ul>
        <li>Install Node.js from <a href='https://nodejs.org/en/download'>site</a></li>
        <li>Install npm using command <code>npm install -g npm</code></li>
        <li>Install react using command <code>npx create-react-app your-app-name</code></li>
        <li><code>cd your-app-name</code></li>
        <li>Install React Transition Group using command <code>npm install react-transition-group --save</code></li>
        <li>Install React Router using command <code>npm install react-router-dom</code></li>
        <li>Install Axios using command <code>npm i axios</code></li>
        <li>Download <code>public</code> and <code>src</code> from project and put it in <code>your-app-name</code></li>
        <li>You are perfect! =)</li>
      </ul>
    </div>
  )
}

export default About;