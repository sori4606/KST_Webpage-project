import './Header.css'

import {Link} from 'react-router-dom'


const Header = () => {
  return(
    <nav className='navbar'>
      <ul>
        <Link to='/'>
         <img className='logo_img' src = './img/top_logo.gif' alt = 'logo_img' />
         </Link>
          <li className='Dropdown'>
           <div className='Dropdown_Menu'><Link to='/AboutUs'>회사소개</Link></div>
           <div className='Dropdown_Content'>
             <div><Link to='/AboutUs'>기업개요</Link></div>
             <div><Link to='/CEO'>CEO 인사말</Link></div>
             <div><Link to='/Customer'>고객사</Link></div>
             <div><Link to='/Company_History'>회사연혁</Link></div>
             <div><Link to='Howtogo'>찾아오시는 길</Link></div>
           </div>
         </li>

         <li className='Dropdown'>
           <div className='Dropdown_Menu'><Link to='Product'>제품/기술</Link></div>
           <div className = 'Dropdown_Content'>
             <div><Link to='Product'>제품소개</Link></div>
             <div><Link to='Technology'>주요기술</Link></div>
           </div>
         </li>
          
         <li className='Dropdown'>
          <div className='Dropdown_Menu'><Link to='Contact'>고객지원</Link></div>
           <div className = 'Dropdown_Content'>
             <div><Link to='Contact'>문의하기</Link></div>
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
