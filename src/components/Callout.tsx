import { ReactNode } from "react";

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="flex p-3 space-x-4 rounded-lg bg-slate-100 dark:bg-midnight">
      {children}
    </div>
  );
}
