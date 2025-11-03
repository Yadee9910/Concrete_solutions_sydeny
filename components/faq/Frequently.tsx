// components/sections/FAQSection.tsx
import React from 'react';
import FaqCard from '../cards/FaqCard';

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

interface FAQSectionProps {
  title?: string;
  faqItems?: FAQItem[];
}

// Default FAQ items
const defaultFAQItems: FAQItem[] = [
  {
    question: "Which specific services do you offer, and what is your local service area?",
    answer: "Concrete Solution Sydney Bricklaying offers a complete solution covering Bricklaying, Landscaping, Retaining Walls, Concrete Driveways, Decorative Concrete, Paving, Excavation, and Concrete Solution. We proudly serve Seven Hills and the greater Sydney area within a 30km radius, acting as your trusted local bricklayers near me.",
    isOpen: true
  },
  {
    question: "How can I get an accurate quote for my construction or landscaping project?",
    answer: "You can get an accurate quote by contacting us for a free on-site assessment. Our team will visit your property, discuss your requirements, and provide a detailed, transparent quote with no hidden costs."
  },
  {
    question: "What quality standards do you guarantee for your finished brickwork and concrete?",
    answer: "We guarantee the highest quality standards using premium materials and expert craftsmanship. All our work meets Australian building standards and comes with a satisfaction guarantee."
  },
  {
    question: "What experience do your bricklayers and tradespeople have?",
    answer: "Our team consists of highly experienced tradespeople with 10+ years in the industry. All our bricklayers are licensed, insured, and continuously trained in the latest techniques and standards."
  },
  {
    question: "Can you manage projects that involve multiple trades, like both brickwork and landscaping?",
    answer: "Yes, we specialize in managing comprehensive projects that involve multiple trades. We coordinate all aspects from initial excavation to final landscaping, ensuring seamless integration and timely completion."
  }
];

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  faqItems = defaultFAQItems
}) => {
  return (
    <section className="py-8 bg-white w-full">
      <div className="container w-full">
        <div className="">
          {/* Title */}
          <div className="">
            <h1 className=" lg:text-3xl font-bold text-secondary mb-4">
              {title}
            </h1>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 w-full">
            {faqItems.map((faq, index) => (
              <FaqCard
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={faq.isOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};



export default FAQSection;