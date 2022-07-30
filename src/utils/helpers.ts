import { message } from 'antd';

export const alertMessage = (
  content: string,
  type: 'success' | 'error' | 'warning'
) => {
  switch (type) {
    case 'success':
      return message.success({
        content,
        style: {
          textAlign: 'center',
        },
      });
    case 'error':
      return message.error({
        content,
        style: {
          textAlign: 'center',
        },
      });
    case 'warning':
      return message.warning({
        content,
        style: {
          textAlign: 'center',
        },
      });
    default:
      break;
  }
};
