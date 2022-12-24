export default function Exception({ ...props }) {
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
      <circle cx='18' cy='18' r='18' fill='#D26759'></circle>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M17.675 10.2C17.1917 10.2 16.8 10.5918 16.8 11.075V20.125C16.8 20.6083 17.1917 21 17.675 21H18.325C18.8082 21 19.2 20.6083 19.2 20.125V11.075C19.2 10.5918 18.8082 10.2 18.325 10.2H17.675ZM17.675 23.4C17.1917 23.4 16.8 23.7918 16.8 24.275V24.9679C16.8 25.4511 17.1917 25.8429 17.675 25.8429H18.325C18.8082 25.8429 19.2 25.4511 19.2 24.9679V24.275C19.2 23.7918 18.8082 23.4 18.325 23.4H17.675Z'
        fill='white'
      ></path>
    </svg>
  );
}
