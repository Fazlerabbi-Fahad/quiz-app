import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main/Main';
import Home from './components/Home/Home';
import Analytics from './components/Analytics/Analytics';
import Blog from './components/Blog/Blog';
import Questions from './components/Questions/Questions';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Questions></Questions>
        },
        {
          path: 'analytics',
          element: <Analytics></Analytics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
