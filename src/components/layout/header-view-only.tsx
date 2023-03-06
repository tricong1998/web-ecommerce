import { Logo } from './logo';
import classnames from 'classnames';
import Link from 'next/link';
import { Routes } from '@/constants/routes';

type HeaderViewOnlyType = {
  className: string;
};

export const HeaderViewOnly = ({ className }: HeaderViewOnlyType) => {
  return (
    <header className={classnames('w-full h-16 lg:h-18 py-3', className)}>
      <Link href={Routes.HOME}>
        <Logo></Logo>
      </Link>
    </header>
  );
};
