// @flow
import React, { Component } from 'react';
import { 
  View, 
  Text,
  Modal,
  TouchableHighlight,
  Alert
} from 'react-native';
import { ListItem } from 'react-native-elements';
import EventBus from 'eventing-bus';

import ACTIONS from '../../models/actions';
import DeleteModal from '../../components/Modal/index';
import Header from '../../components/Header';
import NavigationUtils from '../../utils/navigation.utils';

class Contact extends Component {
  constructor(props){
    super(props);
  
    this.state = {
        // Error Handling
        hasError: false,

        contacts: [],
        showDeleteModal: false,
        deleteContact: {}
    }
  
  }
  
  componentDidMount() {
    this.fetchContacts();

    EventBus.on('refetch_contact', () => this.fetchContacts())
  }
  
  componentDidUpdate(prevProps, prevState) {
  
  }
  
  componentWillUnmount() {
  
  }
  
  componentDidCatch(error, info) {
    console.log(`Error log from componentDidCatch: error`);
    console.log(info);
  }
  
  /*
  ========================================================
  METHOD - HANDLERS
  ========================================================
  */

  toggleDeleteModal = () => {
    this.setState({ 
      showDeleteModal: !this.state.showDeleteModal
    })
  }

  onLongPressContact = (contact) => {
    this.setState({
      deleteContact: contact,
      showDeleteModal: true
    })
  }

  onPressContact = (contact) => {
    NavigationUtils.navigate('stack_edit_contact', { contact: contact });
  }

  confirmDelete = (index) => {
    if (index == 1) {
      this.toggleDeleteModal()
    } else {
      this.deleteContact(this.state.deleteContact.id)
    }
  } 
  /*
  ========================================================
  METHOD - DATA FETCHING
  ========================================================
  */

  deleteContact = (id) => {
    console.log('deleteContactId', id)
    ACTIONS.deleteContact(id)
      .then(res => {
        console.log('res', res);
        this.toggleDeleteModal();
        this.fetchContacts();
      })
      .catch(err => {
        console.log('error', err)
      })
  }

  fetchContacts = async () => {
    ACTIONS.getContacts()
      .then(res => {
        console.log('contacts', res.data.data)
        let contacts = res.data.data || [];

        this.setState({ contacts })
      })
      .catch(err => {
        console.error('Gagal mengambil data', err)
      })
  }

  /*
  ========================================================
  METHOD - OPTIONAL RENDER
  ========================================================
  */

  renderContacts = () => {
    const { contacts } = this.state;
    return (
      <View>
        {
          contacts.map((contact) => 
            <ListItem
              key={contact.id}
              leftAvatar={{ source: { uri: contact.photo ? contact.photo : '' } }}
              title={contact.firstName + ' ' + contact.lastName}
              subtitle={contact.age.toString()}
              bottomDivider
              onLongPress={ () => this.onLongPressContact(contact) }
              onPress={ () => this.onPressContact(contact) }
              chevron
            />
          )
        }
      </View>
    )
  }
  
  render() {
    const { showDeleteModal, deleteContact } = this.state;

    if (this.state.hasError) {
      // Fallback UI when Error
      // return 
    }

    return (
      <View style={{ flex: 1 }}>
        <Header 
          title="Contact"
          isAdd={true}
        />
        { this.renderContacts() }
        <DeleteModal 
          show={showDeleteModal}
          contact={deleteContact}
          toggleModal={this.toggleDeleteModal}
          confirmDelete={this.confirmDelete}
        />
      </View>
    )
  }
}

export default Contact;