 const Feature: React.FC = () => {
    return (
        <section className="relative w-full">
          <div className="absolute w-full bg-gradient-to-b from-gray-100 to-white"></div>
          <div className="relative mx-auto w-full max-w-7xl px-5 py-10 sm:py-12 md:py-16 md:px-10">
            <div className="py-8 flex grid h-full grid-cols-12 gap-10 pb-10 sm:mt-16">
              <div className="group relative col-span-12 flex h-full flex-col items-start justify-end overflow-hidden rounded-xl md:col-span-6 xl:col-span-4">
                <div className="block h-96 w-full transform bg-cover bg-center transition duration-300 ease-in-out hover:scale-110" 
                  style={{backgroundImage: `url(${'https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg'})`}}> </div>
                <div className="relative z-20 h-auto w-full border-t-0 border-yellow-200 bg-purple-500 py-8 px-7 text-white">
                  <div className="absolute top-0 -mt-3.5 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase text-purple-500">
                    INSTANTLY
                  </div>
                  <h2 className="mb-5 text-5xl font-bold">Send Money In a Flash</h2>
                  <p className="mb-2 text-lg font-normal text-purple-100 opacity-100 normal-case">
                    To your family and loved ones across Africa
                  </p>
                </div>
              </div>
      
              <div className="group relative col-span-12 flex h-full flex-col items-start justify-end overflow-hidden rounded-xl md:col-span-6 xl:col-span-4">
                <div className="block h-96 w-full transform bg-cover bg-center transition duration-300 ease-in-out hover:scale-110" 
                style={{backgroundImage: `url(${'https://cdn.devdojo.com/images/may2021/orange.jpg'})`}}> </div> 
                {/* replace bove with a downloaded public asset e.g `url(./assets/download.png)` */}
                <div className="relative z-20 h-auto w-full border-t-0 border-yellow-200 bg-blue-400 py-8 px-7 text-white">
                  <div className="absolute top-0 -mt-3.5 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase text-blue-500">
                    No Hassles</div>
                  <h2 className="mb-5 text-5xl font-bold">Recieve Funds</h2>
                  <p className="mb-2 text-lg font-normal text-blue-100 opacity-100">
                    From anywhere in the world in a flash⚡
                  </p>
                </div>
              </div>
      
              <div className="group relative col-span-12 flex h-full flex-col items-start justify-end overflow-hidden rounded-xl sm:col-span-12 sm:flex-row xl:col-span-4 xl:flex-col">
                <div className="block h-96 w-full transform bg-cover bg-center transition duration-300 ease-in-out hover:scale-110" 
                style={{ backgroundImage: `url(${'https://cdn.devdojo.com/images/may2021/gbc.jpg'})`}}></div>
                <div className="relative z-20 flex h-auto w-full flex-col items-start justify-center border-t-0 border-yellow-200 bg-yellow-400 py-8 px-7 text-white sm:h-full xl:h-auto">
                  <div className="absolute top-0 -mt-3.5 inline-block rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase text-yellow-400 sm:relative sm:mb-5 xl:absolute xl:mb-0">
                    Seamless</div>
                  <h2 className="mb-5 text-5xl font-bold"><a href="#_" className="">
                    Pay With Solana</a></h2>
                  <p className="mb-2 text-lg font-normal text-yellow-50 opacity-100">
                    Seamless integration with your Solana wallets and assets</p>
                </div>
              </div>
      
              <div className="col-span-12 grid grid-cols-12 gap-7">
                <div className="col-span-12 flex flex-col items-start overflow-hidden rounded-xl shadow-sm md:col-span-6 lg:col-span-4">
                  <div className="relative flex flex-col items-start rounded-b-2xl border border-t-0 border-gray-200 bg-white px-6 py-4">
                    <div className="inline-block inline-block flex w-auto items-center rounded-full bg-indigo-400 px-3 py-1.5 text-xs font-medium uppercase leading-none text-white">
                      <span>COMING SOON</span>
                    </div>
                    <h2 className="text-base font-bold sm:text-lg md:text-xl pt-2">
                      Wishlists. Giveaways. Savings Pots.</h2>
                    </div>
                </div>
      
                <div className="col-span-12 flex flex-col items-start overflow-hidden rounded-xl shadow-sm md:col-span-6 lg:col-span-4">
                  <div className="relative flex flex-col items-start rounded-b-2xl border border-t-0 border-gray-200 bg-white px-6 py-4">
                    <div className="inline-block inline-block flex w-auto items-center rounded-full bg-red-400 px-3 py-1.5 text-xs font-medium uppercase leading-none text-white">
                      <span>COMING SOON</span>
                    </div>
                    <h2 className="text-base font-bold sm:text-lg md:text-xl pt-2">
                      Personalized Support Pages and Shops for web3 Creators</h2>
                    </div>
                </div>
      
                <div className="col-span-12 flex flex-col items-start overflow-hidden rounded-xl shadow-sm md:col-span-6 lg:col-span-4">
                <div className="relative flex flex-col items-start rounded-b-2xl border border-t-0 border-gray-200 bg-white px-6 py-4">
                    <div className="inline-block inline-block flex w-auto items-center rounded-full bg-purple-500 px-3 py-1.5 text-xs font-medium uppercase leading-none text-white">
                      <span>Coming Soon</span>
                    </div>
                    <h2 className="text-base font-bold sm:text-lg md:text-xl pt-2">
                      Gamified leaderboards with play points and badges</h2>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    )
}

export default Feature