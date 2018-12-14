import { readJsonSync } from 'fs-extra';

export function doIt(input: string): string {
   return readJsonSync(input);
}
