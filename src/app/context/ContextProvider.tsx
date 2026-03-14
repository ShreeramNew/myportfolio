"use client";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { ContextValues } from "../types/ContextValue";

export const GeneralContext = createContext<ContextValues>({} as ContextValues);

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<string>("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Initialize Observer
  useEffect(() => {
    const options = {
      // 0.4 is safer than 0.5 for mobile browsers where address bars
      // might shift the viewport height and prevent a clean 50% hit.
      threshold: 0.4,
      rootMargin: "0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, options);

    return () => observerRef.current?.disconnect();
  }, []);

  // Use useCallback to ensure the function reference is stable
  const ObserveElement = useCallback((element: HTMLElement | null) => {
    if (!element) return;

    // Small delay ensures the DOM is fully painted and
    // observerRef.current is definitely assigned.
    const observer = observerRef.current;
    if (observer) {
      observer.observe(element);
    } else {
      // Fallback: If observer isn't ready, try again in a tick
      setTimeout(() => {
        observerRef.current?.observe(element);
      }, 100);
    }
  }, []);

  return (
    <GeneralContext.Provider
      value={{ activeTab, setActiveTab, ObserveElement }}
    >
      {children}
    </GeneralContext.Provider>
  );
}
