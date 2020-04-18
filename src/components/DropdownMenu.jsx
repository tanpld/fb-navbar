import React from 'react';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import DropdownItem from './DropdownItem';

function DropdownMenu(props) {
  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={<CogIcon />}
        rightIcon={<ChevronIcon />}
      >
        Settings
      </DropdownItem>
    </div>
  );
}
 
export default DropdownMenu;