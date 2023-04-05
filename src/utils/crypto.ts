import bcryptjs from 'bcryptjs';
import crypto from 'crypto';

const generateHashForPassword = (password: string) => bcryptjs.hashSync(password, 12);

const checkHash = (input: string, hash: string) => bcryptjs.compareSync(input, hash);

const randomUUID = () => crypto.randomUUID();

export { generateHashForPassword, checkHash, randomUUID };
