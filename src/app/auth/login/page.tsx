"use client"
import LoginOptions from "@/components/LoginOptions";
import Image from "next/image";
import { motion } from "framer-motion";

const LoginPage = () => {

    return (
        <div className="w-screen min-h-screen flex flex-col lg:flex-row">
            <div className="flex-1 hidden lg:flex justify-center items-center h-screen border-r border-[#E9EAEB] bg-[#FFFFFF]">
                <div className="stats-cards">
                    <motion.div 
                        className="stats-card-md flex flex-col rounded-3xl text-[#081735]" style={{'boxShadow': '0px 0px 24px 0px #08173529'}}
                        initial={{ y: -30, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5, // Animation duration (in seconds)
                            ease: 'easeOut' // Ease-out effect
                        }}
                    >
                        <div className="flex gap-2 border-b py-[20px] items-center px-[18px]">
                            <Image
                                src={"/CodeAnt_logo_sm.svg"}
                                alt="codeant-logo"
                                width={28}
                                height={31}
                            />
                            <span className="text-lg font-bold leading-7">AI to Detect & Autofix Bad Code</span>
                        </div>
                        <div className="flex gap-12 justify-between items-center pt-[22px] pr-[30px] pb-[24px] pl-[20px]">
                            <div className="flex flex-col items-center">
                                <span className="font-bold">30+</span>
                                <span className="text-sm font-normal">Language Support</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="font-bold">10K+</span>
                                <span className="text-sm font-normal">Developers</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <span className="font-bold">100K+</span>
                                <span className="text-sm font-normal">Hours Saved</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="flex rounded-3xl flex-col gap-2 p-4 px-8 translate-x-[80%] -translate-y-[10px] max-w-60 text-[#081735] bg-white" style={{'boxShadow': '0px 0px 24px 0px #08173529'}}
                        initial={{ y: 30, x: 0, opacity: 0 }} 
                        animate={{ y: -10, x: 190, opacity: 1 }}
                        transition={{
                            duration: 0.5, // Animation duration (in seconds)
                            ease: 'easeOut' // Ease-out effect
                        }}
                    >
                        <div className="flex justify-between">
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-light-violet z-10">
                                <Image 
                                    src={"/pie_chart.svg"} 
                                    width={24}
                                    height={24}
                                    alt="graph" 
                                    className="z-20"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center text-primary">
                                    <Image 
                                        src={"/arrow-up.svg"} 
                                        width={11}
                                        height={8}
                                        alt="graph" 
                                        className="z-20"
                                    />
                                    <span className="ml-1 text-sm font-bold text-[#0049C6]">14%</span>
                                </div>
                                <div className="font-normal text-xs">
                                    This week
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <span className="font-semibold">Issues Fixed</span>
                                <span className="font-semibold text-2xl">500K+</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
                {/* box-shadow: 0px 0px 24px 0px #08173529; */}

                <Image 
                    src={"/CodeAnt_AI.svg"}
                    alt="codeant"
                    width={284}
                    height={319}
                    className="fixed bottom-0 left-0 w-52 lg:w-64 xl:w-[284px]"
                />
            </div>

            <div className="flex-1 flex h-screen z-40 bg-[#FAFAFA]">
                <div className="flex w-full lg:w-full flex-col justify-center items-center p-4 gap-8">
                    <LoginOptions />

                    <span className="text-[14px] text-[#181D27] lg:text-base">
                        By signing up you agree to the <b className="cursor-pointer">Privacy Policy</b>.
                    </span>
                 </div>
            </div>
        </div>


       
    )
}

export default LoginPage;