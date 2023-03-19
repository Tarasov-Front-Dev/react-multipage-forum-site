# Multipage forum site created by using React

Site fetchs posts from remote database, sort it and present in selected order. You can like post, remove it or add your own. Also you can click on post and see post comments.

## In project was used

 - All standart React hooks (exc. useCallback)
 - [Axios](https://github.com/axios/axios)
 - [React Router Dom](https://reactrouter.com/)
 - [React Transition Group](https://reactcommunity.org/react-transition-group/)
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
 
## Project futures
 - Log you in and remember you (by Context.Provider). So you'll stay logged in even if you reload the page.
 - Fetch posts from [https://jsonplaceholder.typicode.com/].
 - Sort posts by title, body or id (jsonplaceholder didn't provide date at their posts, but I made sort by post.date as well).
 - Let you write your own post, like some or delete them.
 - You can click on post and see it's comment section.

N.B. GitHub doesn't provide correct support for Routes so you can download project and run it on your own PC to make sure that everything works just fine!
Don't forget to delete homepage prop from package.json. It was added only for GitHub-pages.
