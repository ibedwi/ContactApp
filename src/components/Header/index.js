import React from 'react';

import { 
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Icon from '../Icon';
import theme from '../../styles/theme.styles';

const Header = (props) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10
      }}
    >
      <Text
        style={{
          fontSize: theme.FONT.SIZE.H5,
          fontWeight: 'bold'
        }}
      >
        Contact Page
      </Text>
      <TouchableOpacity>
        <Icon 
          name="plus"
          type={'Feather'}
          size={20}
          color="#000"
        />
      </TouchableOpacity>
    </View>
  )
}

export default Header;