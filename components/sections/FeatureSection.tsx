"use client"

export function FeatureSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className=" mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            our aim is to build a solid data infrastructure, an this is how we streamline that process 
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gray-500/15 blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] rounded-full bg-gray-500/35 blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-gray-500/35 blur-3xl"></div>
        </div>

          {/* grid-1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <div className="p-6 h-[300px] "></div>

            <div className="bg-gradient-to-tl from-black-400/50 to-black-200/50 rounded-xl border border-gray-800 p-6 h-[300px] w-full flex flex-col items-center justify-center">
              <div className="mb-4">
              <div className="flex items-center justify-center mb-4 bg-gradient-to-b from-black-400 to-black-200 rounded-full w-32 h-32" >
                <div className="w-10 h-10 rounded-full bg-gray-500/20 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Warehouse</h3>
                <p className="text-gray-400">Central repository for structured information</p>
              </div>
            </div>

            <div className="p-6 h-[300px]"></div>
          </div>

          {/* grids-2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <div className="bg-gradient-to-tl from-black-400/50 to-black-200/50 rounded-xl border border-gray-800 p-6 h-[300px] flex flex-col item-center justify-center">
              <div className="mb-4">
                
             <div className="flex items-center justify-center mb-4 bg-gradient-to-b from-black-400 to-black-200 rounded-full w-32 h-32" >
                  <div className="w-10 h-10 rounded-full bg-gray-500/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Collection</h3>
                <p className="text-gray-400">Systematic gathering of relevant data across sectors</p>
              </div>
            </div>

            <div className="p-6 h-[300px] relative flex items-center justify-center">
                <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-gray-700 to-black-300 "></div>
            </div>

            <div className="bg-gradient-to-tl from-black-400/50 to-black-200/50 rounded-xl border border-gray-800 p-6 h-[300px] flex flex-col item-center justify-center">
              <div className="mb-4">
                  <div className="flex items-center justify-center mb-4 bg-gradient-to-b from-black-400 to-black-200 rounded-full w-32 h-32" >
                    <div className="w-10 h-10 rounded-full bg-gray-500/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Applications</h3>
                <p className="text-gray-400">Development of use cases leveraging local data</p>
              </div>
            </div>
          </div>


          {/* grid-3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <div className="p-6 h-[300px] "></div>

            <div className="bg-gradient-to-tl from-black-400/50 to-black-200/50 rounded-xl border border-gray-800 p-6 h-[300px] flex flex-col item-center justify-center">
              <div className="mb-4">
                  <div className="flex items-center justify-center mb-4 bg-gradient-to-b from-black-400 to-black-200 rounded-full w-32 h-32" >
                      <div className="w-10 h-10 rounded-full bg-gray-500/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Analytics</h3>
                <p className="text-gray-400">Central repository for structured information</p>
              </div>
            </div>

            <div className="p-6 h-[300px]"></div>
          </div>
          {/* end of grids */}

        </div>
      </div>
    </section>
  )
}

