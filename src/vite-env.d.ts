/// <reference types="vite/client" />

declare module "*.mdx" {
  import { ComponentType } from "react";
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
