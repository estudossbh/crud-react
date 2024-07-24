import { IButtonProps } from "../button/props";

export interface IListItemProps {
  text: string;
  actionButton?: React.FC<IButtonProps>;
}