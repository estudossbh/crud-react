import { IBaseModel, IListItemProps } from "../list-item/props";

export interface IListProps<T extends IBaseModel = any> {
  data: T[];
  listItem: React.FC<IListItemProps<any>>;
}