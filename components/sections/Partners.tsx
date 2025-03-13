import { BackgroundGradient } from "../ui/bg-gradient";
import { GridBackgroundWrap } from "../ui/dot-grid-bg";

export default function Partners() {
  const partners = [
    "DataSynk",
    "Geneline-X",
    "DorbAI",
    "Fortizo Technologies",
    "Peapp Pay",
    "Saful Pay",
  ];

  return (
    <GridBackgroundWrap>
    <section id="partners" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl -md:text-4xl font-bold mb-4 text-white">Our Partners</h2>
          <p className="text-3xl text-white/70 max-w-2xl mx-auto">
            A collaborative consortium building Sierra Leone's data future
          </p>
        </div>

        <div className="mt-8 mb-32 flex justify-center gap-12 flex-wrap">
          <img
            src="/images/datasynk.png"
            alt="Datasynk logo"
            className="h-16 opacity-70"
          />
          <img
            src="/images/fortizo.png"
            alt="Fortizo logo"
            className="h-16 opacity-70"
          />
          <img
            src="/images/dorbai.png"
            alt="Dorb Ai logo"
            className="h-16 opacity-70 filter grayscale invert"
          />
          <img
            src="/images/geneline.png"
            alt="Geneline logo"
            className="h-16 opacity-70 grayscale "
          />
          <img
            src="/images/peeap-pay.png"
            alt="Peeap Pay logo"
            className="h-16 opacity-70 filter grayscale invert"
          />
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-secondary/10 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex items-center justify-center h-32"
              >
                <span className="text-xl font-semibold text-white/90">{partner}</span>
              </div>
            ))}
          </div> */}

        <BackgroundGradient className="h-auto mx-auto rounded-lg">
          <div className="w-full bg-black-200/70 backdrop-blur-sm rounded-lg p-8" >
            <h3 className="text-4xl font-bold mb-4 text-center">
              Join Our Consortium
            </h3>
            <p className="text-white/50 mb-6 text-center text-3xl">
              Become a part of Sierra Leone's data revolution. We're looking for
              partners in technology, research, government, and business sectors.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="bg-white hover:bg-white/90 text-black-200 font-semibold py-3 px-6 rounded-md transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </section>
    </GridBackgroundWrap>
  );
}
