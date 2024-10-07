import React, { createContext, useContext, useState, ReactNode } from "react";

interface PageChildrenContextProps {
  childrenComponents: ReactNode[];
  addPageChild: (child: ReactNode) => void;
}

const PageChildrenContext = createContext<PageChildrenContextProps | undefined>(undefined);

export const PageChildrenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [childrenComponents, setChildrenComponents] = useState<ReactNode[]>([]);

  const addPageChild = (child: ReactNode) => {
    setChildrenComponents((prev) => [...prev, child]);
  };

  return (
    <PageChildrenContext.Provider value={{ childrenComponents, addPageChild }}>
      {children}
    </PageChildrenContext.Provider>
  );
};

export const usePageChildren = () => {
  const context = useContext(PageChildrenContext);
  if (!context) {
    throw new Error("usePageChildren must be used within a PageChildrenProvider");
  }
  return context;
};