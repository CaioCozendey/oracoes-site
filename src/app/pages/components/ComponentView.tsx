"use client";

import CardsView from "./components/CardsView";
import LoadingsView from "./components/LoadingsView";

const ComponentView = ({ activeComponent }: { activeComponent: string | null }) => {
  return (
    <div className="ml-0 md:ml-36 flex-1 backdrop-blur-md p-4 rounded-lg">
      {activeComponent === 'LoadingsView' && <LoadingsView />}
      {activeComponent === 'CardsView' && <CardsView />}
    </div>
  );
};

export default ComponentView;