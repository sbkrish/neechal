import { useState } from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Neechal?",
      answer: "Neechal is an online edServ platform that offers live programming courses, free for eligible students and graduates. We believe that money should not stop young people from learning computer programming. That’s why we provide free courses to students who find it hard to pay, making sure everyone has a chance to learn and grow with personalized support."
    },
    {
      question: "Who can enroll in Neechal's free courses?",
      answer: "To join Neechal's free programming courses, students must be in their final year of college or have graduated on or after 2012. Additionally, those working in unrelated fields who want to switch to the IT sector and are unable to pay for programming courses are eligible."
    },
    {
      question: "How does Neechal ensure the quality of its free courses?",
      answer: "Neechal ensures the quality of its free courses by employing experienced instructors and offering a comprehensive, up-to-date curriculum. We incorporate hands-on projects and actively seek student feedback to continuously improve the learning experience. Additionally, personalized support is provided to help students overcome challenges."
    },
    {
      question: "Is there any certification provided after course completion?",
      answer: "Currently, Neechal is not providing any certification upon course completion. However, we plan to offer certifications in the future. For now, our focus is on ensuring that students thoroughly learn the concepts."
    },
    {
      question: "Can I join Neechal's courses from any country?",
      answer: "Currently, students from India and Sri Lanka can join Neechal's courses."
    },
    {
      question: "Is Neechal's course recorded or live?",
      answer: "Neechal offers live courses for students, allowing real-time interaction with instructors and enhancing the learning experience."
    },
  ];

  const [activeIndices, setActiveIndices] = useState([0]); // Start with the first FAQ open

  const toggleAccordion = (index) => {
    if (activeIndices.includes(index)) {
      // Remove the index if it's already open
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      // Add the index to open it
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="max-w-[85rem] mx-auto" id="FAQ">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="head-text">FAQs</h2>
      </div>
      {/* End Title */}
      <div className="max-w-3xl mx-auto">
        <div className="grid sm:grid-cols-1 gap-0">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center p-4 text-left text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="ml-2">
                  {activeIndices.includes(index) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  )}
                </span>
              </button>
              {activeIndices.includes(index) && (
                <div className="px-4 pb-4 text-gray-600 dark:text-neutral-400 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(FAQ, "app__faq"),
  "faq",
  "app__whitebg"
);
