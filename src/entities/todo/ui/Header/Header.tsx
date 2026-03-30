import tonightBtn from '@/assets/img/tonight_btn.svg';
import './header.css'
import {memo} from 'react'
import { useTasksContext } from '../../model/useTaskContent';


const Header = () => {

  const {toggleTheme} = useTasksContext()
    return (
        <header className="header">
      <div className="container">
        <h1 className="header__title">TODO</h1>
        <button id="theme-toggle">
          <img className="header__theme-btn" 
          id="header__theme-btn" 
          src={tonightBtn}
          onClick = {toggleTheme}
           />
        </button>
      </div>
    </header>
    )
}

export default memo(Header)