import SERVICES from '../services';

/**
 * Used to get contacts
 */
export const getContacts = () => {
  return new Promise((resolve, reject) => {
    SERVICES.getContacts()
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
};

/**
 * Used to get contact
 */
export const getContact = (id) => {
  return new Promise((resolve, reject) => {
    SERVICES.getContact(id)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
};

/**
 * 
 * @param {object} data             - new contact data
 * @param {string} data.firstName   - new contact's first name
 * @param {string} data.lastName    - new contact's last name
 * @param {string} data.age         - new contact's age
 * @param {string} data.photo       - new contact's photo url
 */
export const createContact = (id,data) => {
  return new Promise((resolve, reject) => {
    SERVICES.createContact(data)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

/**
 * 
 * @param {string} id - contact's id that will be deleted
 */
export const deleteContact = (id) => {
  return new Promise((resolve, reject) => {
    SERVICES.deleteContact(id)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

/**
 * 
 * @param {string} id               - edited contact's id
 * @param {object} data             - edited contact's data
 * @param {string} data.firstName   - edited contact's first name
 * @param {string} data.lastName    - edited contact's last name
 * @param {string} data.age         - edited contact's age
 * @param {string} data.photo       - edited contact's photo url
 */
export const editContact = (id, data) => {
  return new Promise((resolve, reject) => {
    SERVICES.editContact(id, data)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

export default {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  editContact
}