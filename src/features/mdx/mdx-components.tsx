import { Callout } from "./MdxAlert";
import { CoverImage } from "./MdxCover";
import { HeadingWithId } from "./mdx-heading-wrapper";

export const MDX_COMPONENTS = {
  CoverComponent: CoverImage,
  AlertComponent: Callout,
  h2: (props: any) => <HeadingWithId level={2} {...props} />,
  h3: (props: any) => <HeadingWithId level={3} {...props} />,
  h4: (props: any) => <HeadingWithId level={4} {...props} />,
};
