import moment from 'moment-timezone';
import { date as dateConstant } from '@constants';
import { date as dateType } from '@types';

moment.tz.setDefault(dateConstant.TIME_ZONE);

const nowDate = () => moment();

const dateFormatter = (date: Date, format: string) => moment(date).format(format);

const dateAddMinutes = (date: Date, i: number, format = '') => moment(date).add(i, 'm').format(format);

const getOperationTaskDateWithTimeRange = (date: Date, range: number, format = '') =>
    `${dateFormatter(date, format)}-${dateAddMinutes(date, range, format)}`;

const nowDateWithFormat = (format: string) => moment().format(format);

const nowDateWithToDate = () => moment().toDate();

const addDate = (date: Date, i: number) => moment(date).add(i, 'd');

const diffDate = (date: Date, diffDate: Date, unit: dateType.unit) => moment(date).diff(diffDate, unit);

const startOfDay = (date?: Date) => moment(date).startOf('d');

const endOfDay = (date?: Date) => moment(date).endOf('d');

const convertToDate = (date: Date) => moment(date);

export {
    nowDate,
    dateFormatter,
    dateAddMinutes,
    getOperationTaskDateWithTimeRange,
    nowDateWithFormat,
    nowDateWithToDate,
    addDate,
    diffDate,
    startOfDay,
    endOfDay,
    convertToDate
};
