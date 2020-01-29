// @flow
import React, { Component } from 'react';
import { 
  View, 
  Text
} from 'react-native';

import ACTIONS from '../../models/actions';

class Contact extends Component {
  constructor(props){
    super(props);
  
    this.state = {
        // Error Handling
        hasError: false
    }
  
  }
  
  //static getDerivedStateFromProps(nextProps, prevState) { 
  //}
  
  componentDidMount() {
  
  }
  
  //shouldComponentUpdate(nextProps, nextState) {
  
  //}
  
  //getSnapshotBeforeUpdate(prevProps, prevState){
  
  //}
  
  componentDidUpdate(prevProps, prevState) {
  
  }
  
  componentWillUnmount() {
  
  }
  
  //static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    //console.log(`Error log from getDerivedStateFromError: error`);
    //return { hasError: true };
  //}
  
  componentDidCatch(error, info) {
    console.log(`Error log from componentDidCatch: error`);
    console.log(info);
  }
  
  /*
  ========================================================
  METHOD - HANDLERS
  ========================================================
  */

  fetchContacts = async () => {
    ACTIONS.getContacts()
      .then(res => {
        console.log('contacts', res.data.data)
      })
      .catct(err => {
        console.error('Gagal mengambil data', err)
      })
  }
  // clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()

  /*
  ========================================================
  METHOD - DATA FETCHING
  ========================================================
  */

  // data fetching methods for render like getSelectReason() or getFooterContent()

  /*
  ========================================================
  METHOD - OPTIONAL RENDER
  ========================================================
  */

  // optional render methods like renderNavigation() or renderProfilePicture()
  
  render() {
    if (this.state.hasError) {
      // Fallback UI when Error
      // return 
    }
    return (
      <View>
        <Text>Contact Page</Text>
      </View>
    )
  }
}

export default Contact;