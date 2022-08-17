import logo from '../../resources/Logo.png'
import { User } from 'react-feather';
import user from '../../resources/userEx.jpeg'
import RoundedImage from '../RoundedImage/RoundedImage';

const Header = () => {

    return (
        <header className="w-screen mb-5 py-5 flex items-center justify-between">
            <img src={logo} alt='logo' className='object-contain h-32 w-32'></img>

            {/* <RoundedImage src={user} width="1/12"></RoundedImage> */}
    

        </header>
     
    )
}

export default Header;