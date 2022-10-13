import { Link } from 'react-router-dom';

import { BsFacebook, BsMessenger } from 'react-icons/bs';
import { AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai';

function Footer({ img1, img2 }) {
    return (
        <div className="bg-[#414141] dark:bg-[#0D0D10]">
            <div className="mx-[120px] xl:mx-20 lg:mx-10">
                <div className="pt-10 dark:pt-4 flex justify-between flex-row text-white font-normal font-[14px] pb-6 border-b-[1px] border-[#fff] border-opacity-20 border-solid">
                    <div className="dark:mt-[22px] gap-12 flex sm:flex-col">
                        <Link to="/" className="leading-6">
                            Solution
                        </Link>
                        <Link to="/news">News</Link>
                    </div>
                    <div>
                        <img src={img1} alt="logo" className="hidden dark:block sm:dark:mt-10" />
                    </div>
                    <div className="dark:mt-[22px] gap-12 flex sm:flex-col">
                        <Link to="/partner">Partner</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="grid grid-cols-10 items-center dark:block md:flex md:flex-col md:mt-2">
                    <img src={img2} alt="logo" className="dark:hidden col-span-1 " />
                    <div className="flex gap-5 py-[45px] col-span-8 justify-center text-white md:py-[22px] sm:py-[20px]">
                        <BsFacebook className="h-11 w-11 rounded-full cursor-pointer" />
                        <AiFillYoutube className="h-11 w-11 rounded-full cursor-pointer" />
                        <AiFillTwitterCircle className="h-11 w-11 rounded-full cursor-pointer" />
                        <BsMessenger className="h-11 w-11 rounded-full cursor-pointer" />
                    </div>
                </div>
                <div className="font-normal leading-6 text-base text-[#fff] opacity-80 pb-8 text-center">
                    © Sigma, Inc. 2022. We love our users!
                </div>
            </div>
        </div>
    );
}

export default Footer;
