import { UserTokenPayload } from '@models/classes';
import { jwt as jwtUtil } from '@utils';

const signTokens = (userData: any) => jwtUtil.signJwt(new UserTokenPayload(userData).toJSON());

export { signTokens };
