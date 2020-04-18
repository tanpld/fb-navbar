import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
import DropdownItem from './DropdownItem';
import { CSSTransition } from 'react-transition-group';

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    console.log(dropdownRef.current.firstChild)
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div
      className="dropdown"
      style={{ height: menuHeight }}
      ref={dropdownRef}
      >
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        className="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<BoltIcon />}>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            onClick={menu => setActiveMenu(menu)}
            goToMenu={'settings'}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        className="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
        <DropdownItem
            leftIcon={<ArrowIcon />}
            onClick={menu => setActiveMenu(menu)}
            goToMenu={'main'}
          >
            <h3>Settings</h3>
          </DropdownItem>
          <DropdownItem leftIcon={<ChevronIcon />}>Privacy</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Account</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
 
export default DropdownMenu;