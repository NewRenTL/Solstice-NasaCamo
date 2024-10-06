import { createContext, useState, ReactNode, useContext } from "react";
interface PopupContextType {
  isPopUpVisible: boolean;
  showPopUp: () => void;
  hidePopUp: () => void;
}
const AppContext = createContext<PopupContextType | undefined>(undefined);

export const MainContext = ({ children }: { children: ReactNode }) => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const showPopUp = () => {
    setIsPopUpVisible(true);
  };

  // Function to hide the pop-up
  const hidePopUp = () => {
    setIsPopUpVisible(false);
  };

  return (
    <AppContext.Provider value={{ isPopUpVisible, showPopUp, hidePopUp }}>
      {children}
    </AppContext.Provider>
  );
};

export const useMainContext = (): PopupContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useMainContext must be used within a MainContext provider"
    );
  }
  return context;
};
