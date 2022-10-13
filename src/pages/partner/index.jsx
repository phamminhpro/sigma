import Header from '../../component/Header';
import images from '../../assets/images';
function Partner() {
    return (
        <div className="dark:bg-[#191A23] pb-20 ">
            <Header none img={images.Overlay} title="Partners" />
            <div className="bg-[#ccc] dark:bg-[#31323E] mx-[120px] rounded-2xl xl:mx-20 lg:mx-10 md:mx-5 ">
                <div className="rounded-[20px] mb-[21px] mt-[-230px] text-center lg:-mt-[150px] lg:pt-2 sm:-mt-[70px]">
                    <h2 className="text-[#11152A] dark:text-[#fff] font-bold leading-[70px] text-4xl tracking-[-0.7px] mt-4 mb-2 xl:text-3xl xl:leading-10 sm:text-2xl sm:leading-6">
                        Technologies and work with leading ecosystem partners
                    </h2>
                    <h5 className="text-[#1B1F3B] dark:text-[#BEBEC0] font-normal text-xl leading-7 mb-6 xl:leading-6 xl:mb-4 sm:text-base ">
                        See what the press has to say about us
                    </h5>
                </div>
                <div className="mx-[45px] mt-[45px] pb-[100px] lg:pb-10">
                    <div className="grid justify-between grid-cols-3 gap-x-7 gap-y-4 md:grid-cols-2 sm:grid-cols-1">
                        <div className="bg-[#aaa] dark:bg-[#2D2A20] h-[270px] rounded"></div>
                        <div className="bg-[#aaa] dark:bg-[#2D2A20] h-[270px] rounded"></div>
                        <div className="bg-[#aaa] dark:bg-[#2D2A20] h-[270px] rounded"></div>
                        <div className="bg-[#aaa] dark:bg-[#2D2A20] h-[270px] rounded"></div>
                        <div className="bg-[#aaa] dark:bg-[#2D2A20] h-[270px] rounded"></div>
                        <div className="bg-[#aaa] dark:bg-[#2D2A20] h-[270px] rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partner;
