type Page = {
  children?: React.ReactNode,
  title: string,
  isBreadcrumbs?: boolean,
};

type NavItem = {
  id: string,
  name: string,
  route: string,
};

type GeneratedParams = {
  [key: string]: string[];
};

export type {
  Page,
  NavItem,
  GeneratedParams
};
