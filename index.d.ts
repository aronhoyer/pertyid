export as namespace pertyid;

export = pertyid;

declare function pertyid(length?: number, prefix?: string): string;

declare namespace pertyid {
  export const defaultLength: number;
}
