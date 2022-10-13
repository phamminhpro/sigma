import { useTheme } from '../themeContact';
import { useEffect, useState } from 'react';

import { BsSearch, BsFillMoonFill } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { MdOutlineLightMode } from 'react-icons/md';

function ThemeNav() {
    const [data, setData] = useState();
    const { theme, setTheme } = useTheme();

    return (
        <>
            <div className="flex relative">
                <span className="cursor-text">Language</span>
                <img src={images.vietnam} alt="vietnam" className="h-[18px] w-[18px] rounded-[50%] ml-2" />
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
                <div className={showCountry && show !== true ? 'absolute mt-7 bg-[#191A23] my-1' : 'hidden'}>
                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                        <img src={images.england} alt="england" className="h-[18px] w-[18px] rounded-[50%] mr-2" />
                        <span>England</span>
                    </div>
                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                        <img src={images.vietnam} alt="vietnam" className="h-[18px] w-[18px] rounded-[50%] mr-2" />
                        <span>VietNam</span>
                    </div>
                    <div className="flex py-2 hover:bg-[#ccc] pr-6">
                        <img src={images.france} alt="france" className="h-[18px] w-[18px] rounded-[50%] mr-2" />
                        <span>France</span>
                    </div>
                </div>
            </div>
            <div>
                <BsSearch className="mx-3 text-lg cursor-pointer" />
            </div>
            <div>
                {theme === 'light' ? (
                    <BsFillMoonFill className="text-lg cursor-pointer" onClick={() => setTheme('dark')} />
                ) : (
                    <MdOutlineLightMode
                        className="text-lg cursor-pointer animate-spin"
                        onClick={() => setTheme('light')}
                    />
                )}
            </div>
        </>
    );
}

export default ThemeNav;
