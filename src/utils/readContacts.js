import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading contacts from file:', error);
    return [];
  }
};
