export default function Roadmap() {
  const phases = [
    {
      number: "01",
      title: "Market Research & Strategic Planning",
      items: [
        "Conduct data needs assessment",
        "Identify key stakeholders and establish partnerships",
        "Develop regulatory compliance framework",
      ],
    },
    {
      number: "02",
      title: "Data Collection, Processing & Hosting",
      items: [
        "Implement standardized data collection methods",
        "Establish cloud-based data warehouse",
        "Develop data governance policies",
      ],
    },
    {
      number: "03",
      title: "Automation Tools Development",
      items: [
        "Build AI-driven tools for data ingestion",
        "Automate ETL workflows",
        "Implement data verification systems",
      ],
    },
    {
      number: "04",
      title: "AI Use Case Development & Monetization",
      items: [
        "Deploy AI-driven analytics and insights",
        "Develop industry-specific AI solutions",
        "Monetize datasets through subscription services",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Implementation Roadmap
          </h2>
          <p className="text-lg text-gray-200/70 max-w-2xl mx-auto">
            Our strategic approach to building Sierra Leone's data
            infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-secondary/10 backdrop-blur-sm border border-white/10 rounded-lg p-6 relative overflow-hidden"
            >
              <div className="absolute -top-4 -left-4 text-8xl font-bold text-gray-200/10">
                {phase.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gray-200/30 mr-2">•</span>
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
