import PopupItem from './PopupItem';
import { AiOutlineDownload } from 'react-icons/ai';

import images from '../../assets/images';

function Popup() {
    return (
        <div
            class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog relative pointer-events-none mx-auto max-w-fit">
                <div class="modal-content border-none shadow-lg relative pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current mt-[50px] w-[1000px] mx-auto xl:w-[900px] lg:w-[750px] md:w-[550px] md:mt-[30px]">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <button
                            type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="px-[100px] md:px-[50px]">
                        <div className="text-center flex flex-col items-center mb-8 md:mb-4">
                            <h3 className="font-bold leading-6 text-4xl text-[#31323E] mb-3 md:text-3xl md:leading-5 md:mb-2">
                                Receive the document:
                            </h3>
                            <h5 className="font-normal text-base leading-6 text-[#31323E] mb-2">
                                spilot-datasheet-media-2022.pfd
                            </h5>
                            <div className="h-[3px] w-6 bg-[#5A26ED] rounded-sm"></div>
                        </div>
                        <div className="grid grid-cols-2 justify-between gap-4 mb-4 md:grid-cols-1 md:gap-3 md:mb-2">
                            <PopupItem title="First Name" />
                            <div className="flex flex-col">
                                <label for="nation">
                                    Country <span className="text-red-600">*</span>
                                </label>
                                <select
                                    name="nation"
                                    id="nation"
                                    className="border-solid border-[1px] rounded-lg border-[#CFD5E1] md:h-9"
                                >
                                    <option value="Việt Nam">Việt Nam</option>
                                    <option value="Trung Quốc">Trung Quốc</option>
                                    <option value="Hàn Quốc">Hàn Quốc</option>
                                    <option value="Bồ Đào Nha">Bồ Đào Nha</option>
                                </select>
                            </div>
                            <PopupItem title="Last Name" />
                            <PopupItem title="Phone" />
                            <PopupItem title="Company" />
                            <PopupItem title="Email" />
                        </div>
                        <div>
                            <div className="flex  my-5 items-center md:hidden">
                                <input type="checkbox" className="border-solid border-[1px] mr-3" />
                                <h5 className="font-normal text-base leading-6 text-center">
                                    By downloading, I agree to sharing my data with Spilot under the terms defined in
                                    the
                                    <span className="text-[#5A26ED]"> Privacy Policy</span>
                                    <span className="text-red-600">*</span>
                                </h5>
                            </div>
                            <div className="flex justify-center mb-6 md:mb-2">
                                <div className="flex flex-col">
                                    <h5 className="font-thin text-xl md:text-lg">CAPTCHA</h5>
                                    <div className="flex bg-[#ccc] mt-2 px-3 py-2 bg-opacity-50 rounded md:mt-0 md:py-1">
                                        <div className="flex items-center w-[70%]">
                                            <input type="checkbox" className="border-solid border-[1px] mr-2" />
                                            <h5 className="font-normal text-base leading-6">I'm not a Robot</h5>
                                        </div>
                                        <div>
                                            <img src={images.Capcha} alt="Capcha" className="w-[66px] h-[44px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pb-5 justify-center">
                                <div className="bg-[#F4F5F5] rounded-3xl pl-6 flex items-center">
                                    <h5>spilot-datasheet-media-2022.pfd</h5>
                                    <button className="flex items-center bg-[#5A26ED] rounded-3xl px-8 py-2 text-[#fff] ml-3">
                                        Dowload
                                        <AiOutlineDownload />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;
