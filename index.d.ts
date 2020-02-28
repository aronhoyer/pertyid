// Type definitions for pertyid
// Project: pertyid
// Definitions by: Aron Høyer <https://aronhoyer.com>

export as namespace pertyid;

export = pertyid;

declare function pertyid(length?: number): string;

declare namespace pertyid {
  export const defaultLength: number;
}
