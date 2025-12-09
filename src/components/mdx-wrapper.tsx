import { ReactNode } from "react";

interface MDXWrapperProps {
  children: ReactNode;
}

function MDXWrapper({ children }: MDXWrapperProps) {
  return (
    <div className="prose max-w-none prose-slate prose-h2:m-0 prose-h2:font-mono prose-hr:my-5 dark:prose-headings:text-white dark:prose-a:text-white dark:text-slate-400 hover:prose-a:opacity-70">
      {children}
    </div>
  );
}

export default MDXWrapper;
