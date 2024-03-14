import React from 'react'

function Messages() {
    return (
        <div className="flex h-[calc(100%-53px)] w-full flex-col-reverse gap-8 overflow-y-auto px-2 py-4 md:h-[calc(100%-90px)] md:p-0">
            <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%]">
                <img
                    className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                    src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="avatar" />
                <div className="flex w-full max-w-[70%] flex-col gap-2">
                    <p className="text-xs">Jane Smith</p>
                    <div
                        className="relative w-fit bg-[#343434] p-3 text-sm after:absolute after:left-0 after:top-0 after:border-r-[15px] after:border-t-[15px] after:border-r-transparent after:border-t-[#121212]">
                        <div className="flex w-full items-center justify-center gap-1.5 px-3 py-1">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-gray-300"></span>
                            <span className="h-2 w-2 animate-pulse rounded-full bg-gray-300"></span>
                            <span className="h-2 w-2 animate-pulse rounded-full bg-gray-300"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                    className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                    src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="avatar" />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                    <p className="text-[10px] md:text-xs">
                        Dan Abramov
                        <span className="ml-2 text-gray-400">5 minutes ago</span>
                    </p>
                    <div
                        className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                        I&#x27;m good too, just catching up on some reading and enjoying the weather outside.
                    </div>
                    <div className="grid w-full grid-cols-2 items-start justify-start gap-1 md:max-w-[90%] md:gap-2 ml-auto">
                        <img
                            className="flex aspect-video w-full flex-shrink-0 object-cover"
                            src="https://images.pexels.com/photos/18094275/pexels-photo-18094275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="avatar" />
                        <img
                            className="flex aspect-video w-full flex-shrink-0 object-cover"
                            src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="avatar" />
                        <img
                            className="flex aspect-video w-full flex-shrink-0 object-cover"
                            src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="avatar" />
                    </div>
                </div>
            </div>
            <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] mr-0">
                <img
                    className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                    src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="avatar" />
                <div className="flex w-full flex-col gap-1 md:gap-2">
                    <p className="text-[10px] md:text-xs">
                        Jane Smith
                        <span className="ml-2 text-gray-400">10 minutes ago</span>
                    </p>
                    <div
                        className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
                        That sounds lovely! What book are you currently reading?
                    </div>
                </div>
            </div>
            <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                    className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                    src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="avatar" />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                    <p className="text-[10px] md:text-xs">
                        Dan Abramov
                        <span className="ml-2 text-gray-400">15 minutes ago</span>
                    </p>
                    <div
                        className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                        I&#x27;m reading &#x27;The Great Gatsby&#x27; by F. Scott Fitzgerald. It&#x27;s a classic!
                    </div>
                </div>
            </div>
            <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] mr-0">
                <img
                    className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                    src="https://images.pexels.com/photos/18107024/pexels-photo-18107024/free-photo-of-an-old-city-view.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="avatar" />
                <div className="flex w-full flex-col gap-1 md:gap-2">
                    <p className="text-[10px] md:text-xs">
                        Jane Smith
                        <span className="ml-2 text-gray-400">20 minutes ago</span>
                    </p>
                    <div
                        className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#343434] after:left-0 after:border-r-[15px] after:border-r-transparent">
                        Oh, I&#x27;ve heard great things about that book. Enjoy your reading!
                    </div>
                </div>
            </div>
            <div className="flex min-w-[150px] max-w-[80%] items-start justify-start gap-2 text-white md:max-w-[70%] ml-auto flex-row-reverse">
                <img
                    className="flex aspect-square h-7 w-7 flex-shrink-0 rounded-full object-cover md:h-10 md:w-10"
                    src="https://images.pexels.com/photos/18148932/pexels-photo-18148932/free-photo-of-bench-city-man-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="avatar" />
                <div className="flex w-full flex-col gap-1 md:gap-2 items-end justify-end">
                    <p className="text-[10px] md:text-xs">
                        Dan Abramov
                        <span className="ml-2 text-gray-400">25 minutes ago</span>
                    </p>
                    <div
                        className="relative w-fit p-2 text-xs after:absolute after:top-0 after:border-t-[15px] after:border-t-[#121212] md:p-3 md:text-sm bg-[#ae7aff] after:right-0 after:border-l-[15px] after:border-l-transparent">
                        Thanks! It&#x27;s such a beautifully written novel.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Messages