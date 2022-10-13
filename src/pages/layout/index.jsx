import Navbar from './navbar/Navbar';
import Footer from './footer';

import images from '../../assets/images';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer img2={images.light_logo} img1={images.dark_logo_footer} />
        </>
    );
}

export default Layout;
