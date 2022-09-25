import logo from '../../resources/Logo.png'
import { Menu, X } from 'react-feather';
import { useState } from 'react';
import './style.css';

const SideMenu = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleMenu() {
        setIsCollapsed(!isCollapsed);
    }

    return ( 
    <>
    
    <button onClick={toggleMenu}>{isCollapsed ? <Menu/> : <X />}</button>
    {!isCollapsed ?
      <aside className='sidemenu'>
            
      </aside>
        :
        <div></div>
     }
     </>
        
    
        
    
     
    )
}

export default SideMenu;