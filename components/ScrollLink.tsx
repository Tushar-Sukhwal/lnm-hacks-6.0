// components/ScrollLink.tsx
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
// mirror the props of next/link component
type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // Remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    if (elem) {
      const targetOffset = elem.getBoundingClientRect().top;

      // Determine the direction of the scroll
      const scrollDirection = targetOffset < 0 ? -1 : 1;

      // Calculate the target scroll position
      const targetScrollPosition =
        window.scrollY + targetOffset - scrollDirection;

      // Scroll smoothly to the target position
      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
