import React from 'react';
import ContentItem from '../../component/ContentItem';
import Item from '../../component/Item';
import Header from '../../component/Header';

import images from '../../assets/images';

function Home() {
    return (
        <div className="bg-white dark:bg-[#191A23] pb-10">
            <Header img={images.banner} title="Deliver a great experience for your customers" />
            <div className="mx-[120px] xl:mx-20 lg:mx-10 md:mx-5">
                <div className="bg-[#fff] text-[#11152A] dark:text-[#fff] dark:bg-[#191A23] rounded-[20px] mb-[21px] mt-[-70px] text-center md:rounded-md md:mb-5 md:-mt-[50px] sm:-mt-10 ">
                    <h2 className="  font-bold leading-[70px] text-4xl tracking-[-0.7px] mt-4 mb-2 lg:text-4xl md:text-3xl md:mb-1 sm:text-2xl">
                        We are Sigma OTT
                    </h2>
                    <h5 className="dark:text-[#C9C9C9] font-normal text-xl leading-7 mb-6 md:text-base md:mb-1 sm:text-sm sm:leading-5">
                        The world leading of video streaming solution
                    </h5>
                </div>
                <ContentItem title="Vận hành đơn giản" img={images.Rectangle1} />
                <ContentItem reverse title="Nâng cao chất lượng dịch vụ" img={images.Rectangle2} />
                <ContentItem title="Tăng trải nghiệm người dùng" img={images.Rectangle3} />
                <ContentItem reverse title="Tiết giảm chi phí" img={images.Rectangle4} />
                <ContentItem title="Cung cấp thông tin đầy đủ" img={images.Rectangle5} />
                <div>
                    <div className="tracking-[-0.4px] leading-[48px] mb-2 text-center">
                        <h3 className="text-[#11152A] dark:text-[#fff] font-bold text-[32px] lg:text-4xl md:text-3xl sm:text-2xl">
                            Latest Updates
                        </h3>
                        <h5 className="text-[#1B1F3B] dark:text-[#C9C9C9] text-[20px] font-normal md:text-base md:mb-1 sm:text-[15px]">
                            See what the press has to say about us
                        </h5>
                    </div>
                    <div className="flex justify-between lg:flex-wrap lg:justify-around sm:justify-center ">
                        <Item img={images.LightSharp1} />
                        <Item img={images.LightSharp2} />
                        <Item img={images.LightSharp3} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
