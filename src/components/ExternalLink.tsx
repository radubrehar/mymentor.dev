import { CSSProperties, ReactNode } from "react";

export default ({
  to,
  ...props
}: {
  to: string;
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  return (
    <a
      {...props}
      target="_blank"
      href={to}
      rel="noreferrer noopener nofollow"
    />
  );
};
