import { PropsWithChildren } from "react";

export interface IBaseModel {
  id?: string;
}

export interface IListItemProps<T extends IBaseModel> extends PropsWithChildren {
  model: T;
  onReload: () => void;
}