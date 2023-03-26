import {createEvent, restore} from 'effector';

import {IconName} from '@shared/config/iconList';

export type MovieType = {
  mainImage: IconName; //"batman"
  title: string; // "Batman"
  productionTitle?: string; //"2022 Detective-Crime-Action 2h36m"
  stars?: IconName; //"stars"
  description?: string; // "The story is about Batman, who seeks justice on the streets of Gotham, and becomes the personification of merciless retribution for the citizens."
  castsImage?: IconName; //"batman"
  castsTitle?: string; // "Batman"
};

const setSelectedMovie = createEvent<MovieType>();

const $selectedMovie = restore(setSelectedMovie, {} as MovieType);

export {setSelectedMovie, $selectedMovie};
