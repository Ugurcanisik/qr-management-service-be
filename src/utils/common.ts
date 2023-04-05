import { nanoid } from 'nanoid';

const generateRandomString = (length = 12) => nanoid(length);

export { generateRandomString };
