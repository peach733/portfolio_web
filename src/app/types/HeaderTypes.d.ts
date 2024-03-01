import { SetStateAction } from "react";

interface HeaderProps {
  title: string;
  pageMoveHandler: (title: string) => void;
  session: any;
}

export { HeaderProps };
