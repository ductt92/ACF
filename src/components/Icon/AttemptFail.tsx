export default function AttemptFail({ ...props }) {
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
      <circle cx='18' cy='18' r='18' fill='#B789C7'></circle>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.3961 18.8438H12.6562L21.0938 8.4375L19.0414 16.875H22.7812L14.3437 27.2812L16.3961 18.8438Z'
        fill='white'
      ></path>
    </svg>
  );
}
