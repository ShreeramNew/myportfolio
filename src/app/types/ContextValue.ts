export type ContextValues = {
  activeTab?: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  ObserveElement: (element: HTMLDivElement) => void;
};
