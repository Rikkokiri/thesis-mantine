import { Image, ImageProps } from "@mantine/core";

interface ICandidateIndicatorProps extends ImageProps {
  imgSrc: string;
  size?: number;
}

export const CandidateIndicator = ({ size = 24, ...props }: ICandidateIndicatorProps) => {
  const { style, ...rest } = props;
  const styles = {
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: "var(--card-bg)",
  };

  return (
    <Image
      src={props.imgSrc}
      className={`candidate-indicator ${props.className}`}
      style={{ ...styles, ...style }}
      {...rest}
    />
  );
};
