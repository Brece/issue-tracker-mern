import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className=''>
            <h1>404</h1>
            <p>Sorry, this page does not exist.</p>
            <Link to='/' className='btn btn-primary'>Go Back</Link>
        </div>
    );
}

export default NotFound;
