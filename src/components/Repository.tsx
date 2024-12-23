import Image from "next/image";

const Repository = ({ 
    index,
    title, 
    visibility, 
    techStack, 
    repoSize, 
    lastUpdated,  
    maxLength 
}:{
    index: number
    title: string,
    visibility: string
    techStack: string
    repoSize: string,
    lastUpdated: number
    maxLength: number
}) => {
    return (
        <div className={`py-6 bg-white text-[#181D27] ${index === maxLength-1? 'rounded-b-xl' : 'border-b border-[#D5D7DA]'}`}>
            <div className="px-6 flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                    <span className="text-xl font-medium">{title}</span>
                    <span className="border text-sm font-normal border-[#B2DDFF] rounded-full bg-[#EFF8FF] h-fit text-[#175CD3] py-[2px] pl-[10px] pr-[10px]">
                        {visibility}
                    </span>
                </div>
                <div className="flex flex-wrap gap-6 lg:gap-10 items-center text-base font-normal">
                    <div className="flex gap-2 items-center">
                        <span>{techStack}</span> 
                        <span className="h-2 w-2 block rounded-full bg-blue-600"></span></div>
                    <div className="flex gap-2 items-center">
                        <span>
                            <Image
                                src={"/dashboard/database.svg"}
                                alt="refresh"
                                width={10.5}
                                height={12}
                            />
                        </span>
                        <span className="">{repoSize}</span>
                        <span>KB</span>
                    </div>
                    <div>Updated {lastUpdated} day ago</div>
                </div>
            </div>
        </div>
    )
}

export default Repository;