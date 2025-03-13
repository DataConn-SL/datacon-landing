"use client";

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

interface BenefitSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  direction: "left" | "right";
}

const benefits = [
  {
    title: "Data Collection, Processing & Hosting",
    description: [
      "Data Warehousing & ETL Services – Implement end-to-end solutions for storing",
      "and processing data efficiently.",
      "Data Governance & Compliance – Ensure compliance with international and local",
      "data protection laws.",
      "Data Verification & Quality Assurance – Develop mechanisms to validate and",
      "clean data for accuracy and reliability.",
      "Cloud Data Solutions – Deploy cloud-based infrastructure to ensure high",
      "availability and scalability.",
    ].join("\n"),
    imageUrl: "/images/sourcing-data.png",
    direction: "right",
  },
  {
    title: "Automation Tools Development",
    description: [
      "Data Cleaning & Transformation Tools – Automate data structuring for better usability.",
      "Data Pipeline Development – Build automated workflows for continuous data ingestion.",
      "AI-Driven Data Annotation – Implement smart labeling techniques to prepare datasets for AI model training.",
      "AI-Powered Data Processing – Leverage AI to extract insights and automate repetitive tasks.",
    ].join("\n"),
    imageUrl: "/images/data-man.png",
    direction: "left",
  },
  {
    title: "AI Use Cases & Data Services",
    description: [
      "AI Model Training & Development – Build AI solutions using localized, real-world datasets.",
      "Industry-Specific AI Solutions – Create sector-specific applications for education,",
      "healthcare, finance, and business analytics.",
      "AI for Automation & Optimization – Deploy AI to improve efficiency in decisionmaking",
      "and operations.",
      "AI-Driven Data Analytics – Provide deep insights",
    ].join("\n"),
    imageUrl: "/images/data-ai.webp",
    direction: "right",
  },
];

export function AimObjective() {
  return (
    <>
      {benefits.map((benefit) => (
        <section className="py-20 relative" key={benefit.title}>
          <div className="container mx-auto px-6">
            <div
              className={`flex flex-col ${benefit.direction === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <div className="bg-black-200 rounded-xl border border-gray-800 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/10 to-transparent"></div>
                  <img
                    src={
                      benefit.imageUrl ||
                      "/placeholder.svg?height=400&width=600"
                    }
                    alt={benefit.title}
                    className="w-full h-[250px] rounded-lg relative z-10 filter grayscale hover:grayscale-0 transition duration-300 object-cover"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {benefit.title}
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                  {benefit.description}
                </p>
                <Link
                  href="#"
                  className={buttonStyles({
                    color: "default",
                    radius: "full",
                    variant: "shadow",
                    class: "bg-gray-700 hover:bg-gray-600",
                  })}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
