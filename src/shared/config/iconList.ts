import wallet from '@assets/svg/Wallet.svg';
import profile from '@assets/svg/UserCircle.svg';
import search from '@assets/svg/MagnifyingGlass.svg';
import order from '@assets/svg/Package.svg';
import star from '@assets/svg/Star.svg';
import nextArrow from '@assets/svg/NextArrow.svg';
import calendar from '@assets/svg/Calendar.svg';

export const iconsList = {
  wallet,
  profile,
  search,
  order,
  star,
  nextArrow,
  calendar,
};

export type IconName = keyof typeof iconsList;
