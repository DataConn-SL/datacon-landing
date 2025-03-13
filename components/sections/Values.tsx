export default function Values() {
  return (
    <>
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black-100 to-transparent z-10 h-20 bottom-0"></div>
        <div className="bg-black-200 rounded-xl border border-gray-800 p-6 max-w-5xl mx-auto relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gray-500 to-gray-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-4">
            <div className="bg-black-300 rounded-lg p-4 w-64 border border-gray-800">
              <h3 className="text-gray-400 text-sm mb-2">Total Revenue</h3>
              <p className="text-2xl font-bold">$12,543</p>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                <span>+12.5%</span>
              </div>
            </div>
            <div className="bg-black-300 rounded-lg p-4 w-64 border border-gray-800">
              <h3 className="text-gray-400 text-sm mb-2">Active Users</h3>
              <p className="text-2xl font-bold">1,234</p>
              <div className="flex items-center mt-2 text-green-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                  />
                </svg>
                <span>+8.3%</span>
              </div>
            </div>
            <div className="bg-black-300 rounded-lg p-4 w-64 border border-gray-800">
              <h3 className="text-gray-400 text-sm mb-2">Conversion Rate</h3>
              <p className="text-2xl font-bold">3.2%</p>
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181"
                  />
                </svg>
                <span>-1.2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
