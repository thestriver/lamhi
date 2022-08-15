import { useRouter } from 'next/router'
import { useWallet } from '@solana/wallet-adapter-react'

export default function Hero(){
    const { publicKey } = useWallet()
    const router = useRouter()
    return (
        // Navbar
       <>
        <section className="body-font relative w-full text-gray-700">
            <div className="container mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between py-5 md:flex-row">
            <a onClick={() => router.push('/')} className="relative md:px-16 flex w-auto select-none items-center text-2xl font-extrabold leading-none text-white">Lamhi ⚡</a>
            </div>
        </section>
        <section className="pt-32 md:px-0">
        <div className="container mx-auto max-w-6xl items-center">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2">
              <div className="w-full space-y-6 pb-6 sm:max-w-md sm:pr-5 md:space-y-4 md:pb-0 lg:max-w-lg lg:space-y-8 lg:pr-0 xl:space-y-9">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  <span className="block xl:inline">Send and Recieve Money </span>
                  <span className="block xl:inline">Across Africa</span>
                </h1>
                <p className="mx-auto text-base text-gray-400 sm:max-w-md md:max-w-3xl lg:text-xl">
                  Powered by Solana, Lamhi helps you conveniently send and recieve money in an 
                  instant ⚡ without any hassle. 
                  You only need to simply connect your Wallet to get started.
                  
                  </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a onClick={() => router.push('/welcome')} className="cursor-pointer mb-3 flex w-full items-center rounded-md bg-indigo-600 px-6 py-3 text-lg text-white hover:bg-indigo-700 sm:mb-0 sm:w-auto">
                    Try It Free
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  {/* <a href="#_" className="flex items-center rounded-md bg-gray-100 px-6 py-3 text-gray-500 hover:bg-gray-200 hover:text-gray-600"> Learn More </a> */}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="h-auto w-full overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>     
       </>   
    )
}