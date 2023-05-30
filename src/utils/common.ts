import { customAlphabet } from 'nanoid';

const generateRandomString = (length = 10) => customAlphabet('1234567890abcdefghjklmnoprstuvxyz', length)();

export { generateRandomString };
