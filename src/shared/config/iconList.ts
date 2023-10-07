import backArrow from '@assets/svg/BackArrow.svg';
import calendar from '@assets/svg/Calendar.svg';
import ellipse from '@assets/svg/Ellipse.svg';
import leftArrow from '@assets/svg/LeftArrow.svg';
import search from '@assets/svg/MagnifyingGlass.svg';
import microphone from '@assets/svg/Microphone.svg';
import nextArrow from '@assets/svg/NextArrow.svg';
import order from '@assets/svg/Package.svg';
import play from '@assets/svg/Play.svg';
import searchTwo from '@assets/svg/SearchTwo.svg';
import star from '@assets/svg/Star.svg';
import starMovieNotUp from '@assets/svg/StarMovieNotUp.svg';
import starMovieUp from '@assets/svg/StarMovieUp.svg';
import profile from '@assets/svg/UserCircle.svg';
import wallet from '@assets/svg/Wallet.svg';
import actorOne from '@assets/svg/mokImages/ActorOne.svg';
import batman from '@assets/svg/mokImages/Batman.svg';
import batmanBackground from '@assets/svg/mokImages/BatmanBackground.svg';
import blackAdam from '@assets/svg/mokImages/BlackAdam.svg';
import redNotice from '@assets/svg/mokImages/RedNotice.svg';
import spiderman from '@assets/svg/mokImages/Spiderman.svg';

export const iconsList = {
  wallet,
  profile,
  search,
  order,
  star,
  nextArrow,
  calendar,
  backArrow,
  microphone,
  searchTwo,
  starMovieUp,
  starMovieNotUp,
  play,
  ellipse,
  leftArrow,

  batman,
  blackAdam,
  redNotice,
  spiderman,
  batmanBackground,
  actorOne,
};

export type IconName = keyof typeof iconsList;
