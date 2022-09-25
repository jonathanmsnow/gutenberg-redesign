import logo from '../../resources/Logo.png'
import { Menu, X } from 'react-feather';
import user from '../../resources/userEx.jpeg'
import RoundedImage from '../RoundedImage/RoundedImage';
import { useState } from 'react';

const Header = () => {

    return (
        <header className="container mx-auto w-screen mb-5 py-5 flex items-center justify-between">
            


            <img src={logo} alt='logo' className='object-contain h-32 w-32'></img>

            {/* <RoundedImage src={user} width="1/12"></RoundedImage> */}
    

        </header>
        
    
     
    )
}

export default Header;