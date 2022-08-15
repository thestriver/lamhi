import React, { useState, useEffect } from "react";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { useRouter } from 'next/router'
import SendMoney from "../components/SendMoney";
import RecieveMoney from "../components/RecieveMoney";

export default function DashboardPage(){
    const [showSend, setShowSend] = useState(false)
    const [showRecieve, setShowRecieve] = useState(false)
    const { publicKey } = useWallet();
    const router = useRouter();
    
    useEffect(() => {        
		if (publicKey === null) {
			router.push('/');
			return;
		}		
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [publicKey]);
    return (
        <>
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="-mx-6 px-6 py-4">
                    <a onClick={() => router.push('/')} className="relative flex w-auto select-none items-center text-2xl font-extrabold leading-none text-black cursor-pointer">Lamhi ⚡</a>
                    </div>

                    <ul className="space-y-2 tracking-wide mt-8">
                        <li>
                            <a href="#" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                    <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                    <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                </svg>
                                <span className="-mr-1 font-medium">Dashboard</span>
                            </a>
                        </li>
                    
                    </ul>
                </div>
                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button onClick={() => router.push('/')} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="group-hover:text-gray-700">Home</span>
        </button>
    </div>
            </aside>
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <div className="sticky top-0 h-16 border-b bg-white lg:py-2.5">
                    <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
                        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div className="flex space-x-4 justify-center">
                        <p className='text-xl pt-2'> Welcome, </p>
                        <WalletMultiButton className='!bg-indigo-600 w-full rounded-lg hover:scale-105 text-center' />
                        
                        </div>
                    </div>
                </div>

                <div className="px-6 pt-6 2xl:container">
                {/* <!-- component --> */}
                <div className="p-2 flex flex-wrap ">
                    {/* Send Money */}
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg cursor-pointer" onClick={() => {setShowSend(!showSend); setShowRecieve(false)}} >
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: `scale(1.5)`, opacity: 0.1}}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-28 h-28 bottom-0 left-0 -mb-24 ml-3" 
                            // style={{background: radialGradient(black, transparent 60%), transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2}}
                            ></div>
                            <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-between">
                                <span className="block font-semibold text-xl px-4">Send Money</span>
                            </div>
                        </div>
                    </div>

                    {/* Request Payment */}
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg cursor-pointer"  onClick={() => {setShowRecieve(!showRecieve); setShowSend(false)}}>
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: `scale(1.5)`, opacity: 0.1 }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" 
                            // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
                            ></div>
                            <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" alt="" />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <div className="flex justify-between">
                            <span className="block font-semibold text-xl px-4">Request Payment</span>
                            </div>
                        </div>
                    </div>        
                
                </div>
                </div>

                {/* Fatures */}
                { showSend ? <SendMoney submitTarget='/send' /> : null}
                { showRecieve ? <RecieveMoney /> : null }
                {/* <TestSend /> */}
                

            </div>
        </>
                                
    )
}