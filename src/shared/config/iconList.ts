import backArrow from '@assets/svg/BackArrow.svg';
import calendar from '@assets/svg/Calendar.svg';
import search from '@assets/svg/MagnifyingGlass.svg';
import nextArrow from '@assets/svg/NextArrow.svg';
import order from '@assets/svg/Package.svg';
import star from '@assets/svg/Star.svg';
import profile from '@assets/svg/UserCircle.svg';
import wallet from '@assets/svg/Wallet.svg';

export const iconsList = {
  wallet,
  profile,
  search,
  order,
  star,
  nextArrow,
  calendar,
  backArrow,
};

export type IconName = keyof typeof iconsList;
