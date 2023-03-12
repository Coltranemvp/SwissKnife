import {TextAlignType} from '@shared/types/ui/TextAlign';

export function isTextAlign(Item: unknown): Item is TextAlignType {
  return (
    Item === 'auto' ||
    Item === 'left' ||
    Item === 'right' ||
    Item === 'center' ||
    Item === 'justify'
  );
}
