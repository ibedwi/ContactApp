import React, { Component } from 'react';
import { Formik } from 'formik';
import { View } from 'react-native';
import { 
  Input,
  Button
} from 'react-native-elements';
import EventBus from 'eventing-bus';

import Header from '../../components/Header';
import NavigationUtils from '../../utils/navigation.utils';
import ACTIONS from '../../models/actions';
class AddContact extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      // Error Handling
      hasError: false
    }
  
  }

  componentDidMount() {
  
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

  onSubmit = async (data) => {
    console.log('data', data)
    let submittedData = {
      ...data,
      age: Number(data.age)
    }

    ACTIONS.createContact(submittedData)
      .then(res => {
        console.log('Success create contact', res);
        EventBus.publish('refetch_contact');
        NavigationUtils.popAction();
      })
      .catch(err => {
        console.log('Error ', err);
      })
  }

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
        <Header title="Add Contact"/>
        <Formik
          initialValues={{ 
            firstName: '',
            lastName: '',
            age: 0,
            photo: '',
          }}
          onSubmit={values => this.onSubmit(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>

              <Input
                label="Nama Depan"
                placeholder='Nama Depan'
                value={values}
                onBlur={handleBlur.firstName}
                onChangeText={handleChange('firstName')}
              />

              <Input
                label="Nama Belakang"
                placeholder='Nama Belakang'
                value={values}
                onBlur={handleBlur.lastName}
                onChangeText={handleChange('lastName')}
              />

              <Input
                label="Umur"
                placeholder='Umur'
                value={values}
                onBlur={handleBlur.age}
                onChangeText={handleChange('age')}
                keyboardType="number-pad"
              />

              <Input
                label="URL Foto"
                placeholder='URL foto kontak Anda'
                value={values}
                onBlur={handleBlur.photo}
                onChangeText={handleChange('photo')}
              />

              <View
                style={{
                  padding: 10,
                  marginTop: 10
                }}
              >
                <Button onPress={handleSubmit} title="Submit" />
              </View>

            </View>
          )}
        </Formik>

        
      </View>
    )
  }
}

export default AddContact;