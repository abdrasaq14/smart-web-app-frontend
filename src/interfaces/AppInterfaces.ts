export interface IRoute {
  path: string;
  element: JSX.Element;
  children: {
    path: string;
    element: JSX.Element;
  }[];
}
