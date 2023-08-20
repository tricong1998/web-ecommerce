import Image from 'next/image';
import logoPic from '../../../public/images/petronas-shop-logo-black.svg';
import logoStyle from './logo.module.css';
import classnames from 'classnames';

export const Logo = () => {
  return (
    <div className={classnames('flex', 'justify-center', 'items-center', 'h-full')}>
      <Image
        className={classnames(logoStyle.logo, 'sm:block w-auto max-h-[39px]')}
        src={logoPic}
        alt="logo"
        style={{
          width: 'auto',
        }}
      />
    </div>
  );
};
