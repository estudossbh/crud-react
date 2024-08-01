import { IListItemProps } from "../list-item/props";

interface IListItemData {
  text: string;
}

export interface IListProps {
  data: IListItemData[];
  listItem: React.FC<IListItemProps>;
}