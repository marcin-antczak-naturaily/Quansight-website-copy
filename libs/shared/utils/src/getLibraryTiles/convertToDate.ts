import { TLibraryTile } from './types';

export const convertToDate = (tileItem: TLibraryTile): number =>
  tileItem && tileItem.content && tileItem.content.publishedDate
    ? new Date(tileItem?.content?.publishedDate).getTime()
    : new Date().getTime();
