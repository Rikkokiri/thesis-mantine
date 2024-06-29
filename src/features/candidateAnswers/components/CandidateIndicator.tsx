import "../styles/CandidateImgIndicator.css";

interface ICandidateIndicatorProps {
  alt: string;
  className?: string;
  imgSrc: string;
  size?: number;
}

export const CandidateIndicator = ({ size = 24, ...props }: ICandidateIndicatorProps) => (
  <img
    src={props.imgSrc}
    alt={props.alt}
    className={`candidate-indicator ${props.className || ""}`}
    style={{ width: size, height: size }}
  />
);
