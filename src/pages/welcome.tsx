import React, { useEffect } from "react";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { useRouter } from 'next/router'


export default function WelcomePage(){
    const { publicKey } = useWallet()
    const router = useRouter()
    
    useEffect(() => {        
		if (publicKey !== null) {
			router.push('/dashboard');
			return;
		}		
    //add an extra useefect check
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [publicKey]);

    return (
    <section className="w-full bg-gray-100 px-8 xl:px-8">
    <div className="mx-auto max-w-5xl">
        <div className="flex h-screen flex-col items-center justify-center md:flex-row">
            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                <p className="font-medium uppercase text-indigo-600">Welcome</p>
                <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">Seamless Login</h2>
                <p className="text-xl text-gray-600 md:pr-16">To get started, we simply need you to connect your Solana wallet. 
                We will direct you to your personalized dashboard upon successful connection.</p>
            </div>

            <div className="mt-16 w-full md:mt-0 md:w-2/5">
                <div className="relative z-10 h-auto overflow-hidden rounded-lg border-b-2 border-gray-300 bg-white p-8 py-10 px-7 shadow-2xl">
                <div className="block">
                    <WalletMultiButton className='!bg-indigo-600 w-full rounded-lg hover:scale-105 text-center' />
                </div>
                </div>
            </div>
        </div>
    </div>
    </section>

    )
}