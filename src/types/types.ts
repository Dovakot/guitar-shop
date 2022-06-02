type Page = {
  children?: React.ReactNode,
  title: string,
};

type NavItem = {
  id: string,
  name: string,
  route: string,
};

type GeneratedParams = {
  [key: string]: string[];
};

type GeneratedReview = {
  [key: string]: string | number;
};

type IconSize = {
  width: number,
  height: number,
};

export type {
  Page,
  NavItem,
  GeneratedParams,
  GeneratedReview,
  IconSize
};
