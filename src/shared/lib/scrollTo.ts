import {MutableRefObject} from 'react';

export const scrollTop = (ref: MutableRefObject<any>) => {
  if (ref.current) {
    ref.current.scrollTo({y: 0, animation: false});
  }
};
