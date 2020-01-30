import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Overlay, ButtonGroup } from 'react-native-elements';

import styles from './styles';

const DeleteModal = ({ show, confirmDelete, toggleModal, contact }) => {

  const YesButton = () => 
        <View style={ styles.buttonContainer }>
          <Text style={ styles.buttonText }>Yes</Text>
        </View>

  const NoButton = () => 
      <View style={ styles.buttonContainer }>
        <Text style={ styles.buttonText }>No</Text>
      </View>

  const buttons = [{ element: YesButton }, { element: NoButton } ]

  return (
    <>
    <Overlay
      isVisible={ show }
      windowBackgroundColor="rgba(0, 0, 0, .5)"
      width={'auto'}
      height={'auto'}
      overlayStyle={ styles.overlay }
      onBackdropPress={ toggleModal }
    >
      <View style={ styles.container }>
        <Text style={ styles.messageText }>
          Yakin ingin menghapus kontak {contact.firstName + ' ' + contact.lastName}?
        </Text>
        <ButtonGroup
          onPress={ (selectedIndex) => confirmDelete(selectedIndex) }
          buttons={buttons}
          containerStyle={ styles.buttonGroupContainer }
          buttonStyle={ styles.buttonGroup }
          innerBorderStyle={ styles.buttonGroupInnerBorder }
          containerBorderRadius={0}
        />
      </View>
    </Overlay>
    </>
  )
}

DeleteModal.propTypes = {
  show: PropTypes.bool,
  toggleModal: PropTypes.func,
  confirmDelete: PropTypes.func,
  contact: PropTypes.object
}

DeleteModal.defaultProps = {
  show: true,
  toggleModal: console.log('toggleModal'),
  confirmDelete: (selectedIndex) => {console.log('confirmDelete(selectedIndex) > ', selectedIndex)},
  contact: {
    firstName: 'Dwi',
    lastName: 'Satria'
  }
}

export default DeleteModal;