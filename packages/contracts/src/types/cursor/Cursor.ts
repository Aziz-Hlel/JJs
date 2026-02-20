import { CursorInfo } from './cursorInfo';

export type Cursor<T> = {
  data: T[];
  cursor: CursorInfo;
};
