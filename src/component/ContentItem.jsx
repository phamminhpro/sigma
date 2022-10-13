function ContentItem({ reverse = false, title, img }) {
    return (
        <div
            className={
                reverse
                    ? 'flex flex-row-reverse justify-end items-center mb-12 xl:mb-10 xl:gap-8 md:flex-col-reverse md:gap-0 sm:items-start sm:gap-0 sm:mb-3'
                    : 'flex justify-between items-center mb-12 xl:mb-10 md:flex-col-reverse sm:items-start sm:mb-3'
            }
        >
            <div className="font-light text-base leading-[50px]  my-6 xl:leading-9 xl:my-4 md:leading-7 md:my-2">
                <div className="sm:hidden">
                    <div className="">
                        <h3 className="text-[#11152A] dark:text-white  font-bold text-[34px] leading-10 xl:text-2xl xl:leading-8 md:leading-6">
                            {title}
                        </h3>
                    </div>
                    <div className="h-[3px] w-6 bg-[#5A26ED] rounded-sm mt-2 mb-8 xl:w-5 xl:mb-6 md:mb-2"></div>
                </div>
                <div className="text-[#1B1F3B] dark:text-[#C9C9C9] ">
                    <h5>Tăng mức độ phủ sóng theo khu vực/Địa lý/ ISP</h5>
                    <h5>Cải thiện hiệu suất tổng thể</h5>
                    <h5>Dự phòng/ Chuyển đổi dự phòng</h5>
                    <h5>Giúp hệ thống hoạt động tốt, đáp ứng lượng CCU lớn.</h5>
                </div>
            </div>
            <div className="flex justify-center xl:w-[45%] md:w-[86%] sm:w-full">
                <img
                    src={img}
                    alt="Anh 1"
                    className={reverse ? 'rounded-xl mr-[45px] lg:mr-0' : 'rounded-xl  md:rounded'}
                />
            </div>
            <div className="2xl:hidden sm:block">
                <div className="">
                    <h3 className="text-[#11152A] dark:text-white  font-bold text-[34px] leading-10 xl:text-2xl xl:leading-8 ">
                        {title}
                    </h3>
                </div>
                <div className="h-[3px] w-6 bg-[#5A26ED] rounded-sm mt-2 mb-8 xl:w-5 xl:mb-6"></div>
            </div>
        </div>
    );
}

export default ContentItem;
