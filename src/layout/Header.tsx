import './Header.css'

import {Link} from 'react-router-dom'


const Header = () => {
  return(
    <nav className='navbar'>
      <ul>
         <img className='logo_img' src = './img/top_logo.gif' alt = 'logo_img' />
          <li className='Dropdown'>
           <div className='Dropdown_Menu'><Link to='/AboutUs'>회사소개</Link></div>
           <div className='Dropdown_Content'>
             <div><Link to='/AboutUs'>About Us</Link></div>
             <div><Link to='/CEO'>CEO 인사말</Link></div>
             <div><Link to='/Customer'>고객사</Link></div>
           </div>
         </li>

         <li className='Dropdown'>
           <div className='Dropdown_Menu'><Link to='Material'>제품/기술</Link></div>
           <div className = 'Dropdown_Content'>
             <div><Link to='Material'>부품소재</Link></div>
             <div><Link to='Product'>제품소개</Link></div>
             <div><Link to='Technology'>주요기술</Link></div>
           </div>
         </li>
          
         <li className='Dropdown'>
          <div className='Dropdown_Menu'><Link to='Contact'>Contact</Link></div>
           <div className = 'Dropdown_Content'>
             <div><Link to='Contact'>연락처</Link></div>
             <div><Link to='Howtogo'>찾아오시는 길</Link></div>
           </div>
         </li>

         <li className = 'Language'>
           <a href = 'Korean'>Korean    |</a>
           <a href = 'English'>   English</a>
         </li>
      </ul>
    </nav>
  )
}

export default Header;
