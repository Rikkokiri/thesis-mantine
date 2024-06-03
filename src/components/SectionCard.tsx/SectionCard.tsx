import { ReactNode } from "react";
import "./SectionCard.css";
import { Title } from "@mantine/core";

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

export const SectionCard = (props: SectionCardProps) => (
  <section className="section-card">
    <div className="section-card__header">
      <Title order={2} size="h3">
        {props.title}
      </Title>
    </div>
    <div className="section-card__content">{props.children}</div>
  </section>
);
