export interface IGridArray {
  firstName: string;
  lastName: string;
  id: number;
}

export interface IFormObject {
  firstName: string;
  lastName: string;
}

export interface IDisplay {
  data: IGridArray[];
  handleEdit: Function;
  handleDelete: Function;
}

export interface IFormPageProps {
  open: boolean;
  handleClose: Function;
  data: IGridArray[];
  setData: Function;
  id: number;
  setId: Function;
}
