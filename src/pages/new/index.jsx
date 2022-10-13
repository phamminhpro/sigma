import Item from '../../component/Item';
import Header from '../../component/Header';

import images from '../../assets/images';

function New() {
    const datas = [
        { img: images.LightSharp1 },
        { img: images.LightSharp2 },
        { img: images.LightSharp3 },
        { img: images.LightSharp1 },
        { img: images.LightSharp2 },
        { img: images.LightSharp3 },
        { img: images.LightSharp1 },
        { img: images.LightSharp2 },
    ];
    return (
        <div className="dark:bg-[#191A23]">
            <Header img={images.banner} title="Deliver a great experience for your customers" />
            <div className="mx-[120px] xl:mx-20 lg:mx-10 md:mx-5 pb-52 xl:pb-[143px] lg:pb-[60px] sm:pb-[60px]">
                <div className="bg-[#fff] dark:bg-[#191A23] rounded-[20px] mb-[21px] mt-[-70px] text-center lg:-mt[50px] md:rounded-md sm:mt-[-40px]">
                    <h2 className="text-[#11152A] dark:text-[#fff] font-bold leading-[70px] text-4xl tracking-[-0.7px] mt-4 mb-2 lg:text-4xl md:text-3xl sm:text-2xl">
                        Latest Updates
                    </h2>
                    <h5 className="text-[#1B1F3B] dark:text-[#C9C9C9] font-normal text-xl leading-7 mb-6 md:text-base md:mb-1 sm:text-sm sm:leading-5">
                        See what the press has to say about us
                    </h5>
                </div>
                <div className="grid justify-between grid-cols-3 gap-[6%] xl:gap-[3%] lg:grid-cols-2 lg:gap-[0%] sm:grid-cols-1">
                    {datas.map((data, index) => (
                        <Item img={data.img} news />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default New;
