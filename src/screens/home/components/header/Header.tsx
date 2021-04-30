import React, { useState } from 'react';
import {View, Text} from 'react-native';

const Header: React.FunctionComponent = (): JSX.Element => {
  const [search, setSearch] = useState<boolean>(false);
  return (
    <View>
      <Text>This is header</Text>
    </View>
  );
};

export default Header;
