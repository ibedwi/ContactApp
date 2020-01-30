import React from 'react';

import { 
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import Icon from '../Icon';
import theme from '../../styles/theme.styles';
import PropTypes from 'prop-types';
import NavigationUtils from '../../utils/navigation.utils';

const Header = ({ title, isAdd }) => {
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
        { title }
      </Text>
      {
        isAdd &&
        <TouchableOpacity
          onPress={() => NavigationUtils.navigate('stack_add_contact')}
        >
          <Icon 
            name="plus"
            type={'Feather'}
            size={20}
            color="#000"
          />
        </TouchableOpacity>
      }
    </View>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  isAdd: PropTypes.bool,
}
Header.defaultProps = {
  title: 'Default Title',
  isAdd: false,
}

export default Header;