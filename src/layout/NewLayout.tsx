import MenuUserContainer from './ManagerLayout';

const NewLayout = ({ children }: { children: JSX.Element }) => (
  <div className='flex h-screen flex-col'>
    <div className='flex h-full flex-1 flex-row'>
      <MenuUserContainer />
      <div className='flex-1 flex-col overflow-y-auto p-6'>
        <div className='border-[1] h-full rounded-md border-solid bg-white p-6 shadow-inner'>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default NewLayout;
