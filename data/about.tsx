import {
  Wrench,
  ShieldCheck,
  Clock,
  Award,
  Users,
  ThumbsUp,
} from "lucide-react";

export const whyChooseUsData = [
  {
    title: "Expert Bricklaying Team",
    icon: <Wrench className="size-6 sm:size-7 md:size-8" />,
    description:
      "Our team consists of fully licensed, insured, and experienced professional bricklayers and mason bricklayers. We pride ourselves on attention to detail, ensuring every project meets the highest Australian standards for safety and finish.",
  },
  {
    title: "Quality Assurance Guarantee",
    icon: <ShieldCheck className="size-6 sm:size-7 md:size-8" />,
    description:
      "We stand behind every project with comprehensive warranties and quality guarantees. From structural integrity to aesthetic finishes, we ensure your investment is protected and built to last for generations.",
  },
  {
    title: "On-Time Project Delivery",
    icon: <Clock className="size-6 sm:size-7 md:size-8" />,
    description:
      "We respect your time and schedule. Our efficient project management ensures timely completion without compromising quality, keeping you informed at every stage of the construction process.",
  },
  {
    title: "Award-Winning Service",
    icon: <Award className="size-6 sm:size-7 md:size-8" />,
    description:
      "Recognized for excellence in masonry and bricklaying across Sydney. Our commitment to superior craftsmanship and customer satisfaction has earned us industry accolades and countless satisfied clients.",
  },
  {
    title: "Personalized Approach",
    icon: <Users className="size-6 sm:size-7 md:size-8" />,
    description:
      "Every project is unique, and we treat it as such. We work closely with you to understand your vision and provide tailored solutions that meet your specific needs and budget requirements.",
  },
  {
    title: "Customer Satisfaction",
    icon: <ThumbsUp className="size-6 sm:size-7 md:size-8" />,
    description:
      "Our success is measured by your satisfaction. With hundreds of 5-star reviews and repeat clients, we've built our reputation on delivering exceptional results and outstanding customer service.",
  },
];

export interface DropdownItemProps {
  id: string;
  title: string;
  content: string;
}

export const dropdownItems: DropdownItemProps[] = [
  {
    id: "mission",
    title: "Our Mission",
    content:
      "Our Mission is to be the most reliable and highly-regarded bricklaying contractors in Sydney. We achieve this by always guaranteeing the structural integrity of every project and delivering complete, efficient hardscaping solutions. From simple brickwork to complex retaining walls, we are committed to providing the absolute best service, ensuring efficiency and transparency from project start to finish.",
  },
  {
    id: "vision",
    title: "Our Vision",
    content:
      "We envision a future where every construction project in Sydney benefits from superior masonry and integrated structural design. Our goal is to continually redefine the benchmark for quality and efficiency, setting the industry standard for what clients should expect from a brickwork company. We strive to be the single-source contractor clients rely on for flawless results in excavation, concrete driveways, and specialist mason bricklayer services.",
  },
  {
    id: "core-values",
    title: "Our Core Values",
    content:
      "Our work is guided by three core Values. Precision is our cornerstone, committing us to exact measurements and flawless finishes on all bricklaying and paving work. Reliability means we show up on time, maintain clean worksites, and keep our word, giving you the peace of mind you expect from local bricklayers. Finally, Integrity ensures honest pricing and ethical practices, from the moment we calculate your retaining wall cost to the final project handover.",
  },
];