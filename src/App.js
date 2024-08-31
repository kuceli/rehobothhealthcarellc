import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`bg-white transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <LandingPage />
    </div>
  );
}

export default App;
