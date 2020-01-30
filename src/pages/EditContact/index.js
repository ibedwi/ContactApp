import React, { Component } from 'react';
import { Formik } from 'formik';
import { View, EventSubscriptionVendor } from 'react-native';
import { 
  Input,
  Button
} from 'react-native-elements';
import EventBus from 'eventing-bus';
import theme from '../../styles/theme.styles';
import Header from '../../components/Header';
import NavigationUtils from '../../utils/navigation.utils';
import ACTIONS from '../../models/actions';

class EditContact extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      // Error Handling
      hasError: false,
      contact: {
        id: '',
        firstName: '',
        lastName: '',
        age: '',
        photo: '',
      }
    }
  
  }

  componentDidMount() {
    console.log('this.props', this.props);
    const { navigation } = this.props;
    let contact = navigation.getParam('contact');
    console.log('contact', contact)
    this.setState({ contact })
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
    console.log('')
    ACTIONS.editContact(this.state.contact.id, data)
      .then(res => {
        console.log('Success edit contact', res);
        EventBus.publish('refetch_contact');
        NavigationUtils.popAction();
      })
      .catch(err => {
        console.log('Error ', err);
        console.log('Error ', err.message);
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
    const { contact } = this.state;
    if (this.state.hasError) {
      // Fallback UI when Error
      // return 
    }
    return (
      <View>
        <Header title="Edit Contact"/>
        <Formik
          initialValues={{ 
            firstName: contact.firstName,
            lastName: contact.lastName,
            age: contact.age,
            photo: contact.photo,
          }}
          onSubmit={values => this.onSubmit(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>

              <Input
                label="Nama Depan"
                placeholder={contact.firstName.toString()}
                value={values.firstName}
                onBlur={handleBlur.firstName}
                onChangeText={handleChange('firstName')}
              />

              <Input
                label="Nama Belakang"
                placeholder={contact.lastName.toString()}
                value={values.lastName}
                onBlur={handleBlur.lastName}
                onChangeText={handleChange('lastName')}
              />

              <Input
                label="Umur"
                placeholder={contact.age.toString()}
                value={values.age}
                onBlur={handleBlur.age}
                onChangeText={handleChange('age')}
                keyboardType="number-pad"
              />

              <Input
                label="URL Foto"
                placeholder={contact.photo.toString()}
                value={values.photo}
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

export default EditContact;