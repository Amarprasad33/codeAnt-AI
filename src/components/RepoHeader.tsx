import Image from "next/image";


const RepoHeader = () => {
    return (
        <div className="flex flex-col gap-5 text-[#181D27] bg-white py-5 px-6 border-b border-[#E9EAEB] rounded-t-xl">
            <div className="flex gap-3 lg:gap-0 flex-col lg:flex-row justify-between items-start lg:items-center">
                <div className="flex flex-col gap-1">
                    <span className="text-2xl">Repositories</span>
                    <span className="text-sm leading-5 font-normal text-[#414651]">33 total repositories</span>
                </div>
                <div className="flex flex-wrap gap-3 h-fit">
                    <button className="flex flex-wrap gap-2 items-center rounded-lg border border-[#D5D7DA] py-[10px] px-[14px] text-[#414651] h-fit">
                        <span>
                             <Image
                                src={"/dashboard/refresh.svg"}
                                alt="refresh"
                                width={16.9}
                                height={16.9}
                            />
                        </span>
                        <span>Refresh All</span>
                    </button >
                    <button className="flex gap-2 items-center rounded-lg bg-[#1570EF] border border-blue-400 py-[10px] px-[14px] h-fit text-white">
                        <span>
                             <Image
                                src={"/dashboard/plus.svg"}
                                alt="refresh"
                                width={14.6}
                                height={14.6}
                            />
                        </span>
                        <span>Add Repository</span>
                    </button>
                </div>
            </div>
            <div className="relative">
                    <input className="border border-[#D5D7DA] rounded-lg pl-10 px-[14px] py-[8px] 
                    placeholder:text-base placeholder:font-normal placeholder:text-[#414651]
                    min-w-full sm:min-w-96 focus:outline-none" type="text" placeholder="Search Repositories" />
                <span className="absolute left-[14px] top-[29%]">
                    <Image
                        src={"/dashboard/search.svg"}
                        alt="refresh"
                        width={18}
                        height={18}
                    />
                </span>
            </div>
        </div>
    )
}

export default RepoHeader;