function Item({ img, news = false }) {
    return (
        <div
            className={
                news
                    ? 'dark:bg-[#31323E] mx-auto rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full lg:mb-6 lg:w-[84%] sm:w-[72%] sm:rounded sm:mx-[14%]'
                    : 'dark:bg-[#31323E] rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-[29.3%] xl:w-[32%] lg:w-[40%] lg:mb-4 md:w-[47%] sm:rounded sm:w-[70%]'
            }
        >
            <div>
                <img src={img} alt="Anh 1" className="rounded-t-xl sm:rounded" />
            </div>
            <div className="text-start w-[80%] mt-[21px] ml-6 mb-2 xl:mt-[15px] xl:ml-4 md:w-full">
                <small className="dark:text-[#BEBEC0] mb-2 inline-block font-normal text-xs leading-5">
                    39/03/2022
                </small>
                <h5 className="text-[#1B1F3B] dark:text-[#C9C9C9] leading-7 text-xl font-normal xl:leading-6 xl:text-lg md:text-base md:mr-3">
                    Hidden universe revealed in stunning first images from German telescope
                </h5>
                <a href="#" className="font-semibold text-[#6C55F9] leading-8 text-lg xl:leading-7 md:text-base">
                    Đọc thêm
                </a>
            </div>
        </div>
    );
}

export default Item;
