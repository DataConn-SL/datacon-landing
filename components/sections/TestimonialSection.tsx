"use client";

export function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our clients are saying
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers have to say
            about DataConn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black-200 rounded-xl border border-gray-800 p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-gray-400 text-sm">CEO, TechCorp</p>
              </div>
            </div>
            <p className="text-gray-300">
              "DataConn has transformed how we manage our business operations.
              The platform is intuitive, powerful, and has saved us countless
              hours of administrative work."
            </p>
          </div>

          <div className="bg-black-200 rounded-xl border border-gray-800 p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-700 mr-4 overflow-hidden">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Client"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-gray-400 text-sm">COO, StartupX</p>
              </div>
            </div>
            <p className="text-gray-300">
              "The analytics features in DataConn have given us insights we
              never had before. We've been able to make data-driven decisions
              that have significantly improved our bottom line."
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-black-200 rounded-xl border border-gray-800 px-6 py-3">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold">20k+</span>
              <span className="text-gray-400 text-left">
                Businesses trust
                <br />
                DataConn
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
