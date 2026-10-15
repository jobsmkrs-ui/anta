"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SpecsContextValue = {
  open: boolean;
  productId: string | null;
  setOpen: (o: boolean) => void;
  openFor: (productId: string | null) => void;
};

const SpecsContext = createContext<SpecsContextValue | undefined>(undefined);

export function SpecsProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState<string | null>(null);

  const openFor = (id: string | null) => {
    setProductId(id);
    setOpen(true);
  };

  return (
    <SpecsContext.Provider value={{ open, productId, setOpen, openFor }}>
      {children}
    </SpecsContext.Provider>
  );
}

export function useSpecs() {
  const ctx = useContext(SpecsContext);
  if (!ctx) throw new Error("useSpecs must be used within SpecsProvider");
  return ctx;
}
