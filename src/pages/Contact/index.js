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

import ACTIONS from '../../models/actions';
import DeleteModal from '../../components/Modal/index';
import Header from '../../components/Header';

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

  confirmDelete = (index) => {
    if (index == 1) {
      this.toggleDeleteModal()
    } 
  } 
  /*
  ========================================================
  METHOD - DATA FETCHING
  ========================================================
  */

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
              title={contact.firstName + contact.lastName}
              subtitle={contact.age.toString()}
              bottomDivider
              onLongPress={ () => this.onLongPressContact(contact) }
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
        <Header />
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