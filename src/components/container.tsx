import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col gap-12 px-8 py-14 sm:py-20">{children}</div>;
}

export default Container;
