import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className='App'>
      <div id="page-body">
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/articles-list' element={<ArticlesListPage />} />
          <Route path='/article/:name' element={<ArticlePage />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
