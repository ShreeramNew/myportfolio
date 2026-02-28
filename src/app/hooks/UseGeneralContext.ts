import { useContext } from "react";
import { GeneralContext } from "../context/ContextProvider";

export default function useGeneralContext() {
  const context = useContext(GeneralContext);

  if (!context) console.log("Failed to fetch context values");
  return context;
}
