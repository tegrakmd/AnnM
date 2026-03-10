import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { MDX_COMPONENTS } from "./mdx-components";

export const Mdx = ({ children }: { children: string }) => {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <Suspense fallback={<div>Chargement en cours ..</div>}>
        <MDXRemote source={children} components={MDX_COMPONENTS} />
      </Suspense>
    </div>
  );
};
