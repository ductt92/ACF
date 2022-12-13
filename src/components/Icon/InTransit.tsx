export default function InTransit({ ...props }) {
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
      <circle cx='18' cy='18' r='18' fill='#65AEE0'></circle>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.7001 9.59998H27.9001V22.8H26.7001C26.7001 21.1431 25.357 19.8 23.7001 19.8C22.0432 19.8 20.7001 21.1431 20.7001 22.8H15.3001C15.3001 21.1431 13.9569 19.8 12.3001 19.8C10.6432 19.8 9.30009 21.1431 9.30009 22.8L8.1001 22.8V18L12.3001 12.6H14.7001V9.59998ZM12.9001 17.4H10.5001L12.9001 14.4V17.4ZM26.1001 22.8C26.1001 24.1255 25.0256 25.2 23.7001 25.2C22.3746 25.2 21.3001 24.1255 21.3001 22.8C21.3001 21.4745 22.3746 20.4 23.7001 20.4C25.0256 20.4 26.1001 21.4745 26.1001 22.8ZM12.3001 25.2C13.6256 25.2 14.7001 24.1255 14.7001 22.8C14.7001 21.4745 13.6256 20.4 12.3001 20.4C10.9746 20.4 9.9001 21.4745 9.9001 22.8C9.9001 24.1255 10.9746 25.2 12.3001 25.2Z'
        fill='white'
      ></path>
    </svg>
  );
}