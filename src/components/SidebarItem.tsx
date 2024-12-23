import Image from "next/image"
import Link from "next/link"


const SidebarItem = ({ iconName, displayName, href, clickedItemName, setItemClicked }: {
    iconName: string, displayName: string, href: string, clickedItemName: string, setItemClicked: React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <Link 
            href={href} 
            className={`flex ${iconName == 'Book'? 'gap-[15px]' : 'gap-3'}  items-center py-[10px]
            px-[14px] rounded-lg text-[#414651] ${clickedItemName === displayName? '' : 'lg:hover:bg-zinc-400/20'} 
            ${clickedItemName === displayName? 'bg-[#1570EF] text-white' : 'text-[#414651]'}`}
            onClick={() => setItemClicked(displayName)}
        >
            <Image
                src={`/dashboard/${iconName}.svg`}
                alt={iconName}
                width={iconName == 'Book'? 21 : 24}
                height={iconName == 'Book'? 21 : 24}
                style={{'filter': clickedItemName === displayName? 'invert(1) brightness(2)' : ''}}
            />
            <span className="text-base font-semibold">{displayName}</span>
        </Link>
    )
}

export default SidebarItem