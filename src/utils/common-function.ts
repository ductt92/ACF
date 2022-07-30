import dayjs from 'dayjs';
import { identity, pickBy } from 'lodash';
import querystring, { StringifyOptions } from 'query-string';

import { FORMAT_DATE_DD_MM_YYYY } from '@/contants/common.constants';

export const formatDateRequest = (date: string | Date | undefined) => {
  return dayjs(date).format().toString();
};

export const formatRangeDate = (date: Date | string) => {
  return dayjs(date, FORMAT_DATE_DD_MM_YYYY).toISOString();
};

export function toQuery(
  url: string,
  params?: object,
  option?: StringifyOptions
) {
  const trulyParams = pickBy(params, identity);
  return `${url}?${querystring.stringify(
    trulyParams || {},
    option || { arrayFormat: 'bracket' }
  )}`;
}
