import Image from "next/image";
import Link from "next/link";

const LoginOptionBtn = ({ href, iconName, titleText }: { href: string, iconName: string, titleText: string }) => {
    return (
        <Link href={`${href}`}
            className="border items-center flex w-full text-base
            font-semibold gap-3 px-2 py-4 rounded-lg justify-center hover:bg-[#f7f7f7] text-[#171717]
            transition-colors duration-200">
            <Image
                src={`/${iconName}.svg`}
                alt={iconName}
                width={24}
                height={24}
            />
            {titleText}
        </Link>
    )
}

export default LoginOptionBtn;