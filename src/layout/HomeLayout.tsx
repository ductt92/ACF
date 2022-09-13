import Footer from '@/container/Footer';
import HeaderHome from '@/container/HeaderHome';

const HomeLayout = ({ children }: { children: JSX.Element }) => (
  <>
    <HeaderHome />
    {children}
    <Footer />
  </>
);

export default HomeLayout;
