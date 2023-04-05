import { user as userRepository } from '@repositories';

const getAllUsers = async () => userRepository.getAllUsers();

export { getAllUsers };
