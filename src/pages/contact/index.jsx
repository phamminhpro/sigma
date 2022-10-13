import Header from '../../component/Header';
import images from '../../assets/images';

function Contact() {
    return (
        <div className="dark:bg-[#191A23] pb-20 ">
            <Header none img={images.Overlay} title="Partners" />
            <div className="bg-[#ccc] dark:bg-[#222330] flex mx-[120px] mt-[-230px] rounded-2xl justify-center xl:mx-20 xl:rounded-xl lg:mx-10 md:mx-5 lg:rounded-lg lg:-mt-[150px] lg:justify-between md:flex-col md:text-center sm:-mt-[70px]">
                <div className="mx-12 font-light text-xl leading-8 my-4 max-w-xl mt-[130px] xl:max-w-[350px] lg:ml-10 md:max-w-full md:mt-[30px]">
                    <div className="text-[#11152A] dark:text-[#fff] font-bold text-[34px] leading-10 md:text-xl ">
                        <h3>Contact</h3>
                    </div>
                    <div className="h-[3px] w-6 bg-[#5A26ED] rounded-sm mt-2 mb-8 md:mx-auto md:mb-5"></div>
                    <div className="text-[#1B1F3B] dark:text-[#BEBEC0] md:text-base">
                        <h5>
                            I think it takes more than three seconds to build your brand, and consumers are willing to
                            spend the time if your content is compelling, relevant, and valuable
                        </h5>
                    </div>
                </div>
                <hr className="text-[#1B1F3B] dark:text-[#BEBEC0] border-solid border-[1px] mt-2 mx-10 2xl:hidden md:block" />
                <div className="dark:text-[#8B8B8B] max-w-xs mt-24 font-normal text-sm leading-6 mb-44 xl:ml-6 lg:mr-10 md:text-base md:mt-6 md:max-w-full md:mb-20">
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h5>
                    <input
                        type="text"
                        placeholder="Company Name"
                        className="dark:bg-[#222330] border-[#838383] border-solid w-full h-10 mb-3 pl-3 rounded mt-4 md:w-[45%] md:mr-[10%] sm:w-[48%] sm:mr-[4%]"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="dark:bg-[#222330] border-[#838383] border-solid w-full h-10 mb-3 pl-3 rounded md:w-[45%] sm:w-[48%]"
                    />
                    <div className="mb-6 flex ">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="dark:bg-[#222330] border-[#838383] border-solid h-10 pl-3 mr-[10%] w-[45%] rounded sm:w-[48%] sm:mr-[4%]"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="dark:bg-[#222330] border-[#838383] border-solid h-10 pl-3 w-[45%] rounded sm:w-[48%]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="dark:text-[#fff] w-full text-center bg-[#5A26ED] h-10 rounded hover:bg-opacity-70"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
