export default function InfoReceived({ ...props }) {
  return (
    <svg
      className='h-5 w-5'
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='18' cy='18' r='18' fill='#214977'></circle>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M23.3438 15.1875H19.125V10.9688H12.6562V24.75H23.3438V15.1875ZM18.5625 19.9688H22.2188V20.5312H18.5625V19.9688ZM22.2188 21.6562H17.4375V22.2188H22.2188V21.6562Z'
        fill='white'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.6875 14.625H23.3438L19.6875 10.9688V14.625Z'
        fill='white'
      ></path>
    </svg>
  );
}
