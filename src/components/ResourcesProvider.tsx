"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ResourcesContextValue = {
  open: boolean;
  setOpen: (o: boolean) => void;
  toggle: () => void;
};

const ResourcesContext = createContext<ResourcesContextValue | undefined>(undefined);

export function ResourcesProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((p) => !p);
  return (
    <ResourcesContext.Provider value={{ open, setOpen, toggle }}>
      {children}
    </ResourcesContext.Provider>
  );
}

export function useResources() {
  const ctx = useContext(ResourcesContext);
  if (!ctx) throw new Error("useResources must be used within ResourcesProvider");
  return ctx;
}
