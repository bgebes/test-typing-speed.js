import React from 'react';
import { Select } from '@chakra-ui/react';
import { handleSelectLang } from '../../actions/actions';

function Header() {
  return (
    <Select
      variant="outline"
      bg="blue.400"
      color="white"
      w="10vw"
      border="gray"
      onChange={handleSelectLang}
    >
      <option value="tr" style={{ backgroundColor: '#38a169' }}>
        Turkish
      </option>
      <option value="en" style={{ backgroundColor: '#38a169' }}>
        English
      </option>
    </Select>
  );
}

export default Header;
