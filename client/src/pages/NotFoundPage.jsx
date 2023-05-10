import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='w-full md:w-[400px] md:my-0 md:mx-auto text-center'>
            <h1 className='mb-10'>404</h1>
            <p className='mb-10'>Sorry, this page does not exist.</p>
            <Link to='/'>
                <button className='btn btn-primary bg-primary !mr-0'>
                    Go Back
                </button>
            </Link>
        </div>
    );
}

export default NotFound;
