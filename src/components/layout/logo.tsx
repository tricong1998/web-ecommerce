import Image from 'next/image';
import logoPic from '../../../public/images/petronas-shop-logo-black.svg';
import logoStyle from './logo.module.css';
import classnames from 'classnames';

export const Logo = () => {
  return (
    <div className={classnames('flex justify-center items-center')}>
      <Image
        className={classnames(logoStyle.logo, 'hidden sm:block w-auto max-h-[39px]')}
        src={logoPic}
        alt="logo"
      />
    </div>
  );
};
