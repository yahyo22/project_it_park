export interface Iinput {
  placeholder: string;
  type: string;
  label?: string;
}

export interface ICheckbox {
  label?: string;
}

export interface IButton {
  content: string;
  type: string;
  onClick?: Function;
}
