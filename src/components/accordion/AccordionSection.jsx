const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div>
      <div className="heading" onClick={toggleSection}>
        <div>{section.title}</div>
        <div>{isActiveSection ? "-" : "+"}</div>
      </div>
      {isActiveSection && (
        <div className="content">{section.content}</div>
      )}
    </div>
  );
};

export default AccordionSection;
