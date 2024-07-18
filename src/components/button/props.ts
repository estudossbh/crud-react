import { IconProps } from "phosphor-react";
import { colorType } from "../../shared/utils/types";

type variantType = 'simple' | 'outlined';
type buttonType = 'submit' | 'button';

export interface IButtonProps {
	type: buttonType;
	color?: colorType;
  variant?: variantType;
  disabled?: boolean;
  text?: string;
  icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  onClick?: () => void;
}