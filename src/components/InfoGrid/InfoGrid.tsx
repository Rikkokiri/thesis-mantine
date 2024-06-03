import { ReactNode } from "react";
import "./InfoGrid.css";

interface GridProps {
  children: ReactNode;
  className?: string;
}

export const InfoGrid = ({ children }: { children: ReactNode }) => (
  <ul className="info-grid">{children}</ul>
);

export const InfoGridRow = ({ children, className }: GridProps) => (
  <li className={`info-grid__row ${className ?? ""}`}>{children}</li>
);

export const InfoGridItem = ({ children, className }: GridProps) => (
  <div className={`info-grid__item ${className ?? ""}`}>{children}</div>
);
