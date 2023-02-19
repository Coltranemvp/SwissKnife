import wallet from '../assets/svg/Wallet.svg';
import profile from '../assets/svg/UserCircle.svg';
import search from '../assets/svg/MagnifyingGlass.svg';
import order from '../assets/svg/Package.svg';
import star from '../assets/svg/Star.svg';

export const iconsList = {
  wallet,
  profile,
  search,
  order,
  star,
};

export type IconName = keyof typeof iconsList;
