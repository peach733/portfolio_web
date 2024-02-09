import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    shadow: {
      default: string;
      stack: string;
    };
    colors: {
      primary: string;
      secondary: string;
      black: string;
      white: string;
      gray: string;
      point: string;
    };
  }
}
