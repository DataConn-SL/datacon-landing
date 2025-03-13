"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { BackgroundBeams } from "@/components/ui/bg-beams";
import { Spotlight } from "@/components/ui/small-spotlight";

export function HeroSection() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden h-74">
        <Spotlight />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gray-500/10 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-gray-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-gray-500/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <h1 className="text-3xl md:text-7xl font-bold my-8 ">DataConn</h1>

            <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
              DataCon is a consortium of organization geared towards creating a
              data and AI ecosystem that powers innovation and economic growth
              in Sierra Leone.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={siteConfig.links.docs}
                className={buttonStyles({
                  color: "default",
                  radius: "full",
                  variant: "shadow",
                  size: "lg",
                  class: "bg-gray-700 hover:bg-gray-600",
                })}
              >
                Get Started
              </Link>
              {/* <Link
              href={siteConfig.links.demo}
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                size: "lg",
                class: "border-gray-700 text-white hover:bg-gray-800",
              })}
            >
              Book a Demo
            </Link> */}
            </div>
          </div>

          <div className="flex align-center justify-center max-w-[850px] mx-auto relative bg-transparent mt-32">
            <span className="absolute top-2 left-32  px-4 py-2 bg-gradient-to-tr from-gray-700 to-black-300 flex items-center justify-center rounded-full">
              <span className="text-md text-white">Data</span>
            </span>
            <span className="absolute bottom-2 right-32  px-4 py-2 bg-gradient-to-tr from-gray-700 to-black-300 flex items-center justify-center rounded-full">
              <span className="text-md text-white">Cleaning</span>
            </span>
            <span className="absolute top-1/2 left-2  px-4 py-2 bg-gradient-to-tr from-gray-700 to-black-300 flex items-center justify-center rounded-full">
              <span className="text-md text-white">Structuring</span>
            </span>
            <span className="absolute top-1/2 right-2  px-4 py-2 bg-gradient-to-tr from-gray-700 to-black-300 flex items-center justify-center rounded-full">
              <span className="text-md text-white">Annotation</span>
            </span>
            <span className="absolute top-1/2 left-16  px-4 py-2 bg-gradient-to-tr from-gray-700 to-black-300 flex items-center justify-center rounded-full">
              <span className="text-md text-white">Ai</span>
            </span>
            {/* circle 1 */}
            <div className="flex items-center justify-center bg-gradient-to-t from-black-300/50 to-black-200/50 rounded-full border border-black-300 p-6 h-[350px] w-[350px] mx-auto mb-8 mt-16 relative animate-pulse">
              {/* circle 2 */}
              <div className="flex items-center justify-center bg-gradient-to-t from-black-400/50 to-black-300/50 rounded-full border border-black-300 p-6 h-[250px] w-[250px] mx-auto relative animate-pulse">
                {/* circle 3 */}
                <div className="flex items-center justify-center bg-gradient-to-t from-black-500/75 to-black-400/75 rounded-full border border-black-300 p-6 h-[150px] w-[150px] mx-auto relative animate-pulse">
                  {/* circle center */}
                  <div className="animate-pulse">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-500/50 to-gray-300/50  flex items-center justify-center cursor-pointer animate-spin">
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-32">
          <h1 className="text-5xl font-bold text-gray-400">Partners</h1>

          <p className="text-2xl text-gray-400 mt-8 font-weight-100 line-height-relaxed">
            Data is the foundation of modern technological advancements, yet
            Sierra Leone faces a significant lack of structured, reliable, and
            scalable data infrastructure. This has resulted in challenges across
            multiple industries, including education, healthcare, finance, and
            AI development, where localized datasets are essential for effective
            decision-making and innovation.
            <br />
            Recognizing this gap, DataCon was formed as a collaborative
            consortium comprising DataSynk, Geneline-X, DorbAI, Fortizo
            Technologies, Peapp Pay, Saful Pay, and other strategic partners.
            The consortium's objective is to create a reliable, scalable, and
            interoperable data ecosystem that enables efficient data collection,
            secure storage, intelligent processing, and AI-driven analytics to
            power innovation and economic growth in Sierra Leone
          </p>
        </div>
      </section>
      <BackgroundBeams />
    </>
  );
}
