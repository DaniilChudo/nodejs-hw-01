import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    const newContact = createFakeContact();

    contacts.push(newContact);

    await writeContacts(contacts);

    console.log('One new contact has been added.');
  } catch (error) {
    console.error('Error adding new contact:', error);
  }
};

addOneContact();
