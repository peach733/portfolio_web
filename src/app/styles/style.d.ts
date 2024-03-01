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
      kakao: string;
    };
    background: {
      primary: string;
      gray: string;
      kakao: string;
      github: string;
      naver: string;
      white: string;
      auth: string;
    };
    border: {
      google: string;
    };
  }
}
