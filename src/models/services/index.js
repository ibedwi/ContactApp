import axios from 'axios';

const SERVER = axios.create({
  baseURL: 'https://simple-contact-crud.herokuapp.com',
});

/**
 * Used to get contacts
 */
export const getContacts = () => {
  return SERVER.get('/contact');
};

/**
 * Used to get contact
 */
export const getContact = (id) => {
  return SERVER.get(`/contact/${id}`);
};

/**
 * 
 * @param {object} data             - new contact data
 * @param {string} data.firstName   - new contact's first name
 * @param {string} data.lastName    - new contact's last name
 * @param {string} data.age         - new contact's age
 * @param {string} data.photo       - new contact's photo url
 */
export const createContact = (data) => {
  return SERVER.post('/contact', data);
}

/**
 * 
 * @param {string} id - contact's id that will be deleted
 */
export const deleteContact = (id) => {
  return SERVER.delete(`/contact/${id}`)
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
  return SERVER.put(`/contact/${id}`, data)
}

export default {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  editContact
}