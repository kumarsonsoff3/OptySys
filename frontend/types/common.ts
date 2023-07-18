import { JSX } from "react";

export interface FormData {
  email: string;
  password: string;
}

export interface WrapperProps {
  children: string | JSX.Element | Array<JSX.Element> | React.ReactNode;
}
