function LandingCards() {
    return (
        <div className="p-4 relative">
            <div className="bg-white w-56 h-112 mt-20 z-40 relative hover:shadow-xl duration-200 rounded-large">
                <div
                    id="phone"
                    className="hover:shadow-outside duration-200 w-full h-full flex flex-col items-center rounded-large border-8 border-gray-100 "
                >
                    <div className="bg-gray-100 w-1/2 h-4 rounded-b-lg text-white">
                        _
                    </div>
                    <div
                        id="phone-container"
                        className="w-full p-5 flex flex-col"
                    >
                        <h3 className="font-bold">Alicia Webb</h3>
                        <p>Product Designer</p>
                        <div
                            id="video-container"
                            className="my-2 bg-gray-50 w-full h-48 rounded-lg flex justify-center items-center"
                        >
                            <div
                                id="video-play-button"
                                className="relative w-10 h-10 flex justify-center items-center cursor-pointer"
                            >
                                <div className="w-full h-full rounded-full border-2 border-gray-500">
                                    <svg
                                        className="fill-current text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="texts" className="w-full space-y-3">
                            <div className="bg-gray-100 h-2 mx-2 rounded-large "></div>
                            <div className="bg-gray-100 h-2 mx-4 rounded-large "></div>
                            <div className="flex justify-center gap-4">
                                <div className="w-1/4 flex flex-col items-center">
                                    <div className="bg-gray-100 w-full h-2 rounded-large "></div>
                                    <div className="font-sans text-gray-500 font-bold">
                                        $100
                                    </div>
                                </div>
                                <div className="w-1/4 flex flex-col items-center">
                                    <div className="bg-gray-100 w-full h-2 rounded-large "></div>
                                    <div className="font-sans text-gray-500 font-bold bg-">
                                        30m
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            id="book-button"
                            target="_blank"
                            href="https://superpeer.com/"
                            className="bg-gray-100 mt-2 py-2 w-full text-center font-bold text-gray-500 rounded-lg"
                        >
                            BOOK NOW
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-white w-160 h-112 absolute z-30 hover:z-50 top-5 left-24 hover:shadow-xl duration-200 rounded-2xl">
                <div
                    id="web"
                    className="hover:shadow-outside duration-200 w-full h-full flex flex-col rounded-2xl border-8 border-gray-100 "
                >
                    <div
                        id="top-bar"
                        className="bg-gray-100 w-full h-7 flex gap-1 p-2"
                    >
                        <div className="bg-white w-2 h-2 rounded-full"></div>
                        <div className="bg-white w-2 h-2 rounded-full"></div>
                        <div className="bg-white w-2 h-2 rounded-full"></div>
                    </div>
                    <div
                        id="web-container"
                        className="w-full h-full py-8 px-16"
                    >
                        <div className=" bg-red-100 h-2/4 rounded-lg flex p-6 gap-6">
                            <div className="w-1/2 h-full">
                                <h1 className="text-red-900 font-bold text-2xl">
                                    How I started a Side Hustle with Nick
                                </h1>
                                <p className="text-red-500 text-xs mt-2">
                                    Hosted by Alicia Webb
                                </p>
                            </div>
                            <div className="w-1/2 h-full flex items-center justify-center">
                                <div className="bg-gray-50 w-24 h-24 rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex h-2/5 gap-14 mt-6">
                            <div className="w-1/2 h-full ">
                                <div className="flex flex-col gap-3">
                                    <div className="bg-gray-200 w-5/6 h-2 rounded-lg"></div>
                                    <div className="bg-gray-200 w-6/6 h-2 rounded-lg"></div>
                                    <div className="bg-gray-200 w-5/6 h-2 rounded-lg"></div>
                                    <div className="bg-gray-200 w-6/6 h-2 rounded-lg"></div>
                                    <div className="bg-gray-200 w-5/6 h-2 rounded-lg"></div>
                                    <div className="bg-gray-200 w-2/6 h-2 rounded-lg"></div>
                                    <div className="bg-gray-200 w-4/6 h-2 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="w-1/2 h-full flex flex-col gap-4">
                                <div>
                                    <div className="w-full text-gray-800 flex flex-row gap-2  items-center p-1 ">
                                        <div className="w-5 h-5 ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-5 font-bold flex flex-col items-center justify-center">
                                            Dec 11, 2020
                                        </div>
                                    </div>
                                    <div className="w-full text-gray-800 flex flex-row gap-2  items-center p-1 ">
                                        <div className="w-5 h-5 ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-5 font-bold flex flex-col items-center justify-center">
                                            10:15 AM
                                        </div>
                                    </div>
                                    <div className="w-full text-gray-800 flex flex-row gap-2  items-center p-1 ">
                                        <div className="w-5 h-5 ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="h-5 font-bold flex flex-col items-center justify-center">
                                            Subscribers only
                                        </div>
                                    </div>
                                </div>

                                <a
                                    id="book-button"
                                    target="_blank"
                                    href="https://superpeer.com/"
                                    className="bg-gray-100 py-3 w-full text-center font-bold text-gray-500 rounded-lg"
                                >
                                    JOIN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingCards;
