type Page = {
  children?: React.ReactNode,
  title: string,
  isBreadcrumbs?: boolean,
};

type GeneratedParams = {
  [key: string]: string[];
};

export type {
  Page,
  GeneratedParams
};
