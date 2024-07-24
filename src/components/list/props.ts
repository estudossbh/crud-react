import { IButtonProps } from "../button/props";

interface IListItemData {
  text: string;
  actionButton?: React.FC<IButtonProps>;
}

export interface IListProps {
  data: IListItemData[];
}