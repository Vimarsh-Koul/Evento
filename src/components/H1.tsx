import { twMerge } from "tailwind-merge";

type H1props = {
  children: React.ReactNode;
  className?: string;
};

const H1 = ({ children, className }: H1props) => {
  return (
    <h1
      className={twMerge(
        "text-3xl lg:text-6xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
