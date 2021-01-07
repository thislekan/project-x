export interface ResponseObj {
  body?: never;
  status?: number;
  redirect?: (val: string) => void | never;
}

export interface RequestObj {
  body?: never;
  query?: never;
}
