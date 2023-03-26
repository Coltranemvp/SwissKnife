import {IconName} from '@shared/config/iconList';

type MovieCastTypes = {
  name: string;
  iconName: IconName;
};

export const movieCastData: MovieCastTypes[][] = [
  [
    {name: 'Angelina Jolie', iconName: 'actorOne'},
    {name: 'Batman', iconName: 'batman'},
  ],
  [
    {name: 'Banana man', iconName: 'batman'},
    {name: 'Grinch', iconName: 'batman'},
  ],
];
