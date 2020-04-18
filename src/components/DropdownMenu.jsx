import React, { useState } from 'react';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import DropdownItem from './DropdownItem';
import { CSSTransition } from 'react-transition-group';

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState('main');

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        className="menu-primary"
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
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
      >
        <div className="menu">
        <DropdownItem
            leftIcon={<ArrowIcon />}
            onClick={menu => setActiveMenu(menu)}
            goToMenu={'main'}
          >
            Main
          </DropdownItem>
          <DropdownItem>2</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
 
export default DropdownMenu;