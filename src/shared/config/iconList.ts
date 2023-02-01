import wallet from '@assets/svg/Wallet.svg';
import userCircle from '@assets/svg/UserCircle.svg';
import magnifyingGlass from '@assets/svg/MagnifyingGlass.svg';
import packageIcon from '@assets/svg/Package.svg';
import star from '@assets/svg/Star.svg';

export const iconsList = {
  wallet,
  userCircle,
  magnifyingGlass,
  packageIcon,
  star,
};

export type IconName = keyof typeof iconsList;
