"use client"
import Image from "next/image";
import { useState } from "react";
import { sideBarNavItems, secondaryActions } from "@/lib/sidebar.config";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const [itemClicked, setItemClicked] = useState("Repositories");
    return (
        <div className="flex flex-col h-full pt-[24px]">
            <div className="flex flex-col gap-[20px] px-5">
                <div className="header flex items-center justify-center gap-[14px] ">
                    <Image
                        src={"/CodeAnt_logo_md.svg"}
                        alt="codeant-logo"
                        width={28}
                        height={32}
                    />
                    <span className="font-light text-[#181D27] text-2xl font-satoshiRegular">CodeAnt AI</span>
                </div>
                <button className="w-full border border-[#D5D7DA] rounded-lg py-2 px-3 text-[#181D27] flex gap-[6px] items-center">
                    <span className="max-w-36 overflow-hidden text-ellipsis">DemoUserTextLoremInsinearareafae</span>
                    <span>
                        <Image
                            src={"/dashboard/chevron-down.svg"}
                            alt="codeant-logo"
                            width={13.5}
                            height={7.2}
                        />
                    </span>
                </button>
            </div>

            <div className="px-[14px] mt-4">
                {sideBarNavItems.map((item) => (
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
            
            <div className="mt-auto pb-[24px] px-[14px]">
                {secondaryActions.map((item) => (
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
    )
}


export default Sidebar;