import { IBaseModel, IListItemProps } from "../list-item/props";

export interface IResponse extends IBaseModel {
  descricao: string;
  dataConclusao: string;
  isConcluido: boolean;
}

export interface IListProps {
  url: string;
  listItem: React.FC<IListItemProps<any>>;
}