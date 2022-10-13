import Popup from './popup/Popup';
function Header({ none = false, img, title }) {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
            }}
            className="mt-[25px] dark:mt-0 bg-cover h-[500px] mx-[25px] rounded-xl bg-center flex justify-center items-center lg:mx-[10px] lg:h-[400px] md:h-[350px] md:rounded-none md:mx-0 sm:h-[200px] "
        >
            <div className="m-[auto] flex justify-center flex-col items-center max-w-4xl lg:max-w-3xl">
                <h2 className="font-bold text-5xl text-white mb-[40px] text-center lg:text-4xl sm:mb-[10px] sm:text-3xl">
                    {title}
                </h2>
                <button
                    style={{ background: 'linear-gradient(270deg, #2cfddc 0%, #a35ff8 108.78%)' }}
                    className={
                        none
                            ? 'hidden'
                            : 'hidden dark:block dark:text-white px-[45px] py-[8px] rounded-3xl text-lg hover:opacity-70 sm:py-[6px] '
                    }
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    Dowload
                </button>
            </div>
            <Popup />
        </div>
    );
}

export default Header;
