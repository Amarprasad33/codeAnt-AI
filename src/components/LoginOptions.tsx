"use client"
import { useState } from "react"
import Image from "next/image"
import LoginOptionBtn from "./loginOptionBtn"

const LoginOptions = () => {

    const [hostingType, setHostingType] = useState('saas')

    return (
        <div className="bg-white flex flex-col rounded-xl w-full border border-[#E9EAEB] min-h-[77.5%] lg:min-h-[82.5%] max-w-3xl">
            <div className="border-b flex flex-col py-9 px-4 lg:py-7 lg:px-5 w-full gap-7">
                <div className="flex items-center justify-center gap-[14px]">
                    <Image
                        src={"/CodeAnt_logo_md.svg"}
                        alt="codeant-logo"
                        width={36}
                        height={40}
                    />
                    <span className="font-light text-[#181D27] text-3xl font-satoshiRegular">CodeAnt AI</span>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-center text-2xl lg:text-3xl font-semibold mt-2 text-[#181D27]">
                        Welcome to CodeAnt AI
                    </div>
                    <div>
                        <div className="bg-gray-100/70 border rounded-lg">
                            <button className={`px-[14px] py-[16px] text-xl font-semibold rounded-lg w-1/2 ${hostingType === 'saas' ? 'bg-[#1570EF] text-white' : 'text-[#414651]'}`} onClick={()=>{setHostingType('saas')}}>SAAS</button>
                            <button className={`px-[14px] py-[16px] text-xl font-semibold rounded-lg w-1/2 ${hostingType === 'saas' ? 'text-[#414651]' : 'bg-[#1570EF] text-white'}`} onClick={()=>{setHostingType('self_hosted')}}>Self Hosted</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-5">
                <div className="flex items-center justify-center w-full">
                    {
                        hostingType === 'saas' ? (
                            <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                                <LoginOptionBtn 
                                    href="/dashboard"
                                    iconName="github"
                                    titleText="Sign in with Github"
                                />
                                <LoginOptionBtn 
                                    href="/dashboard"
                                    iconName="bitbucket"
                                    titleText="Sign in with Bitbucket"
                                />
                                <LoginOptionBtn 
                                    href="/dashboard"
                                    iconName="azure"
                                    titleText="Sign in with Azure Devops"
                                />
                                <LoginOptionBtn 
                                    href="/dashboard"
                                    iconName="gitlab"
                                    titleText="Sign in with GitLab"
                                />
                            </div>
                        ) : (
                            <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
                                <LoginOptionBtn 
                                    href="/dashboard"
                                    iconName="gitlab"
                                    titleText="Sign in with GitLab"
                                />
                                <LoginOptionBtn 
                                    href="/dashboard"
                                    iconName="key"
                                    titleText="Sign in with SSO"
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}



export default LoginOptions;