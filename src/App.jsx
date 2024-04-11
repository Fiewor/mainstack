import { createContext, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Home from "./pages/Home";

import "./App.css";

export const ModalContext = createContext();
export const FilterContext = createContext();

function App() {
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({});

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ModalContext.Provider value={{ showModal, setShowModal }}>
        <FilterContext.Provider value={{ filters, setFilters }}>
          <Home />
        </FilterContext.Provider>
      </ModalContext.Provider>
    </LocalizationProvider>
  );
}

export default App;
