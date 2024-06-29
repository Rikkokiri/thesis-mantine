import { FiInfo } from "react-icons/fi";
import { LocalizedString } from "@data/types";
import { TFunction } from "i18next";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface IAdditionalInfoProps {
  t: TFunction;
  info: LocalizedString;
}

export const AdditionalInfo = (props: IAdditionalInfoProps) => {
  const { t, info } = props;
  const { localize } = useLocalizedString();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ToggleButton
        isToggled={opened}
        onClick={open}
        untoggledIcon={<FiInfo size={20} />}
        toggledIcon={<FiInfo size={20} />}
        variant="subtle"
        size="xs"
      >
        {t("question.whatAbout")}
      </ToggleButton>
      <Modal opened={opened} onClose={close} title={t("question.whatAbout")} centered>
        <Text size="sm">{localize(info)}</Text>
      </Modal>
    </>
  );
};
