import { Link } from 'react-router-dom';
import logo from '../assets/IT-logo/cover.png';

function Header () {
    return (
        <div className='mb-5'>
            <Link to='/'>
                <div className='bg-green-200 w-[150px] cursor-pointer'>
                    <img alt='Issue Tracker logo' src={ logo }/>
                </div>
            </Link>
        </div>
    );
}

export default Header;
