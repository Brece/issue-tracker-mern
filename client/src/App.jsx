import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './pages/NotFoundPage';
import Home from './pages/HomePage';
import Task from './pages/TaskPage';

function App() {
  return (
    <>
      <Router>
        <div className='mt-6 mx-3 md:mx-6 lg:w-[1000px] lg:mx-auto relative'>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tasks/:id' element={<Task />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
