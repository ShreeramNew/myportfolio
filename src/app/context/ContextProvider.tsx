"use client";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { ContextValues } from "../types/ContextValue";

export const GeneralContext = createContext<ContextValues>({} as ContextValues);

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<string>("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    console.log("Active Tab:", activeTab);
  }, [activeTab]);

  useEffect(() => {
    //Create a obeserver, which modifies the activeTab on intersections
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    //Disconnect all elements on unmount
    return () => observerRef.current?.disconnect();
  }, []);

  //-----------Recieves element, and adds it into observer------
  const ObserveElement = (element: HTMLDivElement) => {
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  return (
    <GeneralContext.Provider
      value={{ activeTab, setActiveTab, ObserveElement }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
