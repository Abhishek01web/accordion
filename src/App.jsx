import accordionData from "./Data/Data";
import Accordion from "./components/accordion/Accordion";

const App = () => {
  return (
    <div>
      <h1>React Accordion</h1>
      <Accordion sections={accordionData} />
    </div>
  );
};

export default App;
