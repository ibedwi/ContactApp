// @flow
import React, { Component } from 'react';
import { 
  View, 
  Text
} from 'react-native';
import { ListItem } from 'react-native-elements';

import ACTIONS from '../../models/actions';

class Contact extends Component {
  constructor(props){
    super(props);
  
    this.state = {
        // Error Handling
        hasError: false,

        contacts: []
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
            />
          )
        }
      </View>
    )
  }
  
  render() {
    if (this.state.hasError) {
      // Fallback UI when Error
      // return 
    }

    return (
      <View>
        <Text>Contact Page</Text>
        { this.renderContacts() }
      </View>
    )
  }
}

export default Contact;