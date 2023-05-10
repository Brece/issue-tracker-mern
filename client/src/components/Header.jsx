import { Link } from 'react-router-dom';
import logo from '../assets/IT-logo/cover.png';

function Header () {
    return (
        <div className='mb-5'>
                <div className='bg-green-200 w-[150px]'>
                    <Link to='/'>
                        <img alt='Issue Tracker logo' src={ logo }/>
                    </Link>
                </div>
        </div>
    );
}

export default Header;
