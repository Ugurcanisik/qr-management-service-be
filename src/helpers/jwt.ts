import { IUser } from '@interfaces/user';
import { UserTokenPayload } from '@models/classes';
import { jwt as jwtUtil } from '@utils';
import { date as dateConstant } from '@constants';

const signTokens = (userData: IUser) =>
    jwtUtil.signJwt(new UserTokenPayload(userData).toJSON(), {
        expiresIn: dateConstant.PREDEFINED_INTERVALS.month * 9
    });

export { signTokens };
