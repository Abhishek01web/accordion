import { useState } from "react";
import AccordionSection from "./AccordionSection";
import './style.css';

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container">
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  );
};

export default Accordion;
