"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { navbarItemConfig } from "@/lib/sidebar.config";
import SidebarItem from "./SidebarItem";

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [itemClicked, setItemClicked] = useState("");
    
    useEffect(() => {
        setItemClicked("");
    }, [])

    return (
        <div className="flex flex-col bg-white absolute w-full">
            <div className="p-4 flex items-center justify-between">
                <div className="header flex items-center justify-center gap-[14px] ">
                    <Image
                        src={"/CodeAnt_logo_md.svg"}
                        alt="codeant-logo"
                        width={28}
                        height={32}
                    />
                    <span className="font-light text-[#181D27] text-2xl font-satoshiRegular">CodeAnt AI</span>
                </div>
                <div>
                    {
                        expanded? 
                        <Image
                            src={"/dashboard/close.svg"}
                            alt="codeant-logo"
                            width={15}
                            height={15}
                            onClick={() => setExpanded(false)}
                        />
                        :
                        <Image
                            src={"/dashboard/bars.svg"}
                            alt="codeant-logo"
                            width={21}
                            height={17.2}
                            onClick={() => setExpanded(true)}
                        />
                    }
                    
                </div>
            </div>

            {expanded && <div>
                <div className="bg-overlay bg-gray-overlay w-screen min-h-[122dvh] absolute z-30"></div>
                <div className="relative z-50 p-4 bg-white">
                    <button className="w-full border border-[#D5D7DA] rounded-lg py-2 px-3 text-[#181D27] flex gap-[6px] items-center">
                        <span className="max-w-72 overflow-hidden text-ellipsis">DemoUserTextLoremInsinearareafae</span>
                        <span className="ml-auto">
                            <Image
                                src={"/dashboard/chevron-down.svg"}
                                alt="codeant-logo"
                                width={13.5}
                                height={7.2}
                            />
                        </span>
                    </button>

                    <div>
                        <div className="mt-4">
                            {navbarItemConfig.map((item) => (
                                <SidebarItem 
                                    key={item.displayName}
                                    iconName={item.iconName}
                                    displayName={item.displayName}
                                    href={item.href}
                                    clickedItemName={itemClicked}
                                    setItemClicked={setItemClicked}
                                />
                            ))}
                        </div>
                    </div>


                </div>
            </div>}

        </div>
        
    );
}

export default Navbar;