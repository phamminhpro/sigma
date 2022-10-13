import { Link } from 'react-router-dom';
import { useTheme } from '../../../context';

import { useEffect, useState } from 'react';
import { BsSearch, BsFillMoonFill } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { MdOutlineLightMode } from 'react-icons/md';
import { AiOutlineAppstore } from 'react-icons/ai';

import images from '../../../assets/images';

function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [show, setShow] = useState(false);
    const [showCountry, setShowCountry] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY >= 25);
        };
        console.log(scroll);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { theme, setTheme } = useTheme();

    return (
        <div
            className={
                scroll
                    ? 'bg-opacity-40 dark:bg-opacity-10 fixed w-full bg-black top-[0] py-4 backdrop-blur-sm lg:py-[14px] ease-linear duration-500'
                    : 'dark:bg-[#191A23] bg-opacity-10 absolute bg-black dark:relative dark:top-0  w-full py-4 lg:py-[14px]'
            }
        >
            <div className="mx-[120px] xl:mx-20 lg:mx-10 md:mx-5">
                <div className="flex justify-between items-center ">
                    <div href="#">
                        {theme === 'light' ? (
                            <img src={images.light_logo} alt="Anh logo light" className=" w-[100px] h-9" />
                        ) : (
                            <img src={images.dark_logo2} alt="Anh logo light" className=" w-[100px] h-9" />
                        )}
                    </div>
                    <div className="flex text-sm items-center text-white gap-8 lg:hidden">
                        <div className="p-3">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="relative">
                            <div className="flex text-sm items-center p-3">
                                Solution
                                <FiChevronDown
                                    className={
                                        !show
                                            ? 'text-lg cursor-pointer hover:rotate-180 transition-all duration-1000 ease-in-out'
                                            : 'text-lg cursor-pointer hover:rotate-180 transition-all duration-1000 ease-in-out rotate-180'
                                    }
                                    onClick={() => {
                                        setShow(!show);
                                        setShowCountry(false);
                                    }}
                                />
                            </div>
                            <div className={show ? 'absolute w-36 bg-[#191A23] bg-opacity-80' : 'hidden'}>
                                <h5 className="py-1 px-3 hover:bg-[#ccc] hover:text-[#191A23]">Video Processing</h5>
                                <h5 className="py-1 px-3 hover:bg-[#ccc] hover:text-[#191A23]">Security</h5>
                                <h5 className="py-1 px-3 hover:bg-[#ccc] hover:text-[#191A23]">Solution</h5>
                            </div>
                        </div>
                        <div className="p-3">
                            <Link to="/news">News</Link>
                        </div>
                        <div className="p-3">
                            <Link to="/partner">Partner</Link>
                        </div>
                        <div className="p-3">
                            <Link to="/contact">Contact</Link>
                        </div>
                        <div className="flex p-3 ">
                            <div className="flex relative">
                                <span className="cursor-text">Language</span>
                                <img
                                    src={images.vietnam}
                                    alt="vietnam"
                                    className="h-[18px] w-[18px] rounded-[50%] ml-2"
                                />
                                <FiChevronDown
                                    className={
                                        !showCountry
                                            ? 'text-lg cursor-pointer hover:rotate-180 transition-all duration-1000 ease-in-out'
                                            : 'text-lg cursor-pointer hover:rotate-180 transition-all duration-1000 ease-in-out rotate-180'
                                    }
                                    onClick={() => {
                                        setShowCountry(!showCountry);
                                        setShow(false);
                                    }}
                                />
                                <div
                                    className={
                                        showCountry && show !== true ? 'absolute mt-7 bg-[#191A23] my-1' : 'hidden'
                                    }
                                >
                                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                                        <img
                                            src={images.england}
                                            alt="england"
                                            className="h-[18px] w-[18px] rounded-[50%] mr-2"
                                        />
                                        <span>England</span>
                                    </div>
                                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                                        <img
                                            src={images.vietnam}
                                            alt="vietnam"
                                            className="h-[18px] w-[18px] rounded-[50%] mr-2"
                                        />
                                        <span>VietNam</span>
                                    </div>
                                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                                        <img
                                            src={images.france}
                                            alt="france"
                                            className="h-[18px] w-[18px] rounded-[50%] mr-2"
                                        />
                                        <span>France</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <BsSearch className="mx-3 text-lg cursor-pointer" />
                            </div>
                            <div>
                                {theme === 'light' ? (
                                    <BsFillMoonFill
                                        className="text-lg cursor-pointer"
                                        onClick={() => setTheme('dark')}
                                    />
                                ) : (
                                    <MdOutlineLightMode
                                        className="text-lg cursor-pointer animate-spin"
                                        onClick={() => setTheme('light')}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    {/* <div
                        class="modal fade absolute top-0 right-0 hidden w-screen h-screen outline-none overflow-x-hidden overflow-y-auto"
                        id="showNav"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog w-auto pointer-events-none absolute animate-slide right-0 mr-[0px]">
                            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current min-h-screen">
                                <div class=" p-4 border-b border-gray-200 rounded-t-md">
                                    <div className="flex">
                                        <div className="flex">
                                            <div className="flex relative">
                                                <img
                                                    src={images.vietnam}
                                                    alt="vietnam"
                                                    className="h-[30px] w-[30px] rounded-[50%] ml-3"
                                                />
                                                <FiChevronDown
                                                    className={
                                                        !showCountry
                                                            ? 'text-4xl cursor-pointer hover:rotate-180 transition-all duration-1000 ease-in-out mr-5'
                                                            : 'text-4xl cursor-pointer hover:rotate-180 transition-all duration-1000 ease-in-out rotate-180 mr-5'
                                                    }
                                                    onClick={() => {
                                                        setShowCountry(!showCountry);
                                                        setShow(false);
                                                    }}
                                                />
                                                <div
                                                    className={
                                                        showCountry && show !== true
                                                            ? 'absolute mt-7 bg-[#191A23] my-1 lg:text-[#fff]'
                                                            : 'hidden'
                                                    }
                                                >
                                                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                                                        <img
                                                            src={images.england}
                                                            alt="england"
                                                            className="h-[18px] w-[18px] rounded-[50%] mr-2"
                                                        />
                                                        <span>England</span>
                                                    </div>
                                                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                                                        <img
                                                            src={images.vietnam}
                                                            alt="vietnam"
                                                            className="h-[18px] w-[18px] rounded-[50%] mr-2"
                                                        />
                                                        <span>VietNam</span>
                                                    </div>
                                                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                                                        <img
                                                            src={images.france}
                                                            alt="france"
                                                            className="h-[18px] w-[18px] rounded-[50%] mr-2"
                                                        />
                                                        <span>France</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {theme === 'light' ? (
                                                    <BsFillMoonFill
                                                        className="text-3xl mr-7 cursor-pointer "
                                                        onClick={() => setTheme('dark')}
                                                    />
                                                ) : (
                                                    <MdOutlineLightMode
                                                        className="text-3xl mr-7 cursor-pointer animate-spin "
                                                        onClick={() => setTheme('light')}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div>
                                        <div className="p-3">
                                            <Link to="/">Home</Link>
                                        </div>
                                        <div className="p-3">
                                            <Link to="/news">News</Link>
                                        </div>
                                        <div className="p-3">
                                            <Link to="/partner">Partner</Link>
                                        </div>
                                        <div className="p-3">
                                            <Link to="/contact">Contact</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div
                        class="2xl:hidden lg:block inline-block text-white cursor-pointer"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                    >
                        <AiOutlineAppstore className="w-10 h-10" />
                    </div>
                    <div
                        class="offcanvas fixed offcanvas-end  bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0  h-screen right-0 border-none w-[40%] md:w-[45%] sm:w-[50%]"
                        tabindex="-1"
                        id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel"
                    >
                        <div class="offcanvas-header flex items-center justify-between p-4 z-30">
                            <div className="flex relative items-center">
                                <img src={images.vietnam} alt="vietnam" className="h-6 w-6 rounded-[50%] ml-3" />
                                <FiChevronDown
                                    className={
                                        !showCountry
                                            ? 'text-3xl cursor-pointer hover:rotate-180 transition-all duration-1000 ease-in-out mr-5'
                                            : 'text-3xl cursor-pointer hover:rotate-180 transition-all duration-1000 ease-in-out rotate-180 mr-5'
                                    }
                                    onClick={() => {
                                        setShowCountry(!showCountry);
                                        setShow(false);
                                    }}
                                />
                                <div
                                    className={
                                        showCountry && show !== true
                                            ? 'absolute mt-7 bg-[#191A23] my-1 lg:text-[#fff]'
                                            : 'hidden'
                                    }
                                >
                                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                                        <img
                                            src={images.england}
                                            alt="england"
                                            className="h-[18px] w-[18px] rounded-[50%] mr-2"
                                        />
                                        <span>England</span>
                                    </div>
                                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                                        <img
                                            src={images.vietnam}
                                            alt="vietnam"
                                            className="h-[18px] w-[18px] rounded-[50%] mr-2"
                                        />
                                        <span>VietNam</span>
                                    </div>
                                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                                        <img
                                            src={images.france}
                                            alt="france"
                                            className="h-[18px] w-[18px] rounded-[50%] mr-2"
                                        />
                                        <span>France</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                {theme === 'light' ? (
                                    <BsFillMoonFill
                                        className="text-2xl cursor-pointer "
                                        onClick={() => setTheme('dark')}
                                    />
                                ) : (
                                    <MdOutlineLightMode
                                        className="text-2xl cursor-pointer animate-spin "
                                        onClick={() => setTheme('light')}
                                    />
                                )}
                            </div>
                            <button
                                type="button"
                                class="btn-close box-content w-7 h-7 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="w-full">
                            <div className="px-7 py-2 hover:bg-[#ccc]">
                                <Link to="/" className=" block">
                                    Home
                                </Link>
                            </div>
                            <div className="px-7 py-2 hover:bg-[#ccc]">
                                <Link to="/news" className=" block">
                                    News
                                </Link>
                            </div>
                            <div className="px-7 py-2 hover:bg-[#ccc]">
                                <Link to="/partner" className=" block">
                                    Partner
                                </Link>
                            </div>
                            <div className="px-7 py-2 hover:bg-[#ccc]">
                                <Link to="/contact" className=" block">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
