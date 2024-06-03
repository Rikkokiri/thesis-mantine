import "./Tag.css";

interface ITagProps {
  children?: React.ReactNode;
  variant?: "default" | "negative";
}

export const Tag = ({ children, variant = "default" }: ITagProps) => (
  <div className={`tag tag--${variant}`}>{children}</div>
);
