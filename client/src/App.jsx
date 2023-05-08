import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Task from './pages/Task';
import User from './pages/User';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='o-wrap'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tasks/:id' element={<Task />} />
            <Route path='/users/:id' element={<User />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
