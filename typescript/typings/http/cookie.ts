export class Cookie {
  name: string;
  value: string; 
  attributes?: string[];
}

export interface Cookies {
  cookies: Cookie[];
}
