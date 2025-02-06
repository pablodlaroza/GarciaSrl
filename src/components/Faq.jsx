import React, { useState } from "react";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      question: "Was ist Glasfaser?",
      answer:
        "Glasfaser ist eine Technologie, die Glas- oder Kunststofffäden verwendet, um Daten mittels Lichtimpulsen zu übertragen. Sie bietet ultraschnelle Verbindungsgeschwindigkeiten und ein stabileres Signal im Vergleich zu anderen Technologien.",
    },
    {
      question: "Was sind die Vorteile von Glasfaser?",
      answer:
        "Zu den Vorteilen gehören extrem hohe Internetgeschwindigkeiten, geringere Latenz, höhere Datenübertragungskapazität und Resistenz gegen elektromagnetische Störungen.",
    },
    {
      question: "Ist die Installation von Glasfaser in meinem Haus sicher?",
      answer:
        "Ja, die Installation von Glasfaser ist völlig sicher. Unsere Techniker sind geschult, den Prozess professionell und ohne Beschädigung Ihres Eigentums durchzuführen.",
    },
    {
      question: "Wie viel kostet die Installation von Glasfaser?",
      answer:
        "Die Installationskosten variieren je nach Standort und spezifischen Anforderungen. Kontaktieren Sie uns für ein individuelles Angebot.",
    },
    {
      question: "Kann ich Glasfaser für die Arbeit von zu Hause aus nutzen?",
      answer:
        "Auf jeden Fall! Glasfaser ist ideal für Fernarbeit, da es schnelle und zuverlässige Verbindungen bietet, perfekt für Videoanrufe, große Dateiübertragungen und Streaming in hoher Auflösung.",
    },
  ];

  return (
    <div id='Faq' className="w-full bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Häufig gestellte Fragen</h1>
        <p className="text-lg text-gray-700">
          Finden Sie Antworten auf die häufigsten Fragen zur Glasfaser.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
            onClick={() =>
              setActiveQuestion(activeQuestion === index ? null : index)
            }
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
              <svg
                className={`w-6 h-6 transition-transform transform ${
                  activeQuestion === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {activeQuestion === index && (
              <p className="text-gray-600 mt-4">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
