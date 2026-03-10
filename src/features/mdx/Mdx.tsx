import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote-client/rsc";


export const Mdx = ({ children }: { children: string }) => {
    return (
        <Suspense fallback={<div>Chargement en cours ....not-first:</div>}>
            <MDXRemote source={children}
            />
        </Suspense>
    );
};