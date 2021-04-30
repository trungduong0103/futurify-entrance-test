import React, {useState} from 'react';
import {View} from 'react-native';
import Dropdown from './components/drop-down/Dropdown';

const Header: React.FunctionComponent = (): JSX.Element => {
  const [search, setSearch] = useState<boolean>(false);
  return (
    <>
      <View style={{flex: 2}} />
      <Dropdown />
      <View style={{flex: 2}} />
    </>
  );
};

export default Header;
