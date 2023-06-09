# Multipage forum site created by using React

Site fetchs posts from remote database, sorts it and presents in selected order. You can like post, remove it or add your own. Also you can click on post and see post comments.

## In project was used

 - [Node.js](https://nodejs.org) (v18.15.0)
 - [React](https://react.dev) (v18.2.0)
 - [Axios](https://github.com/axios/axios/) (v1.3.4)
 - [React Router Dom](https://reactrouter.com/) (v6.4)
 - [React Transition Group](https://reactcommunity.org/react-transition-group/) (v4.4.5)
 - Custom hooks (like useFetching, usePosts, useSortedPosts)

## You can see in project

 - Five different pages to show you content;
 - Seven reusable UI components:
    - `MyButton`
    - `MyInput`
    - `MyLoader`
    - `MyModal`
    - `MyPagination`
    - `MySelect`
    - `Navbar`
 - Six hand-made components:
    - `AppRouter`
    - `Counter`
    - `PostFilter`
    - `PostForm`
    - `PostItem`
    - `PostList`
 - One PostSevice API.
 - Pagination, transitions, and other fancy and stylish features.
 
## Project features
 - Log you in and remember you (by Context.Provider). So you'll stay logged in even if you reload the page.
 - Fetch posts from https://jsonplaceholder.typicode.com/.
 - Sort posts by title, body or id (jsonplaceholder didn't provide date at their posts, but I made sort by post.date as well).
 - Let you write your own post, like some or delete them.
 - You can click on post and see it's comment section.

## To run project on your PC you should
 - Install Node.js from https://nodejs.org/en/download
 - Install npm using command `npm install -g npm`
 - Install react using command `npx create-react-app your-app-name` and then `cd your-app-name`
 - Install React Transition Group using command `npm install react-transition-group --save`
 - Install React Router using command `npm install react-router-dom`
 - Install Axios using command `npm i axios`
 - Download `public` and `src` from project and put it in `your-app-name`
 - You are perfect! =)
