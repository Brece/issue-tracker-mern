import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <>
      <Router>
        <div className='mt-6 mx-3 md:mx-6 lg:w-[1000px] lg:mx-auto relative'>
        <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tasks/:id' element={<TaskPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
