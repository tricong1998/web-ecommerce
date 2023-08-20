import Link from 'next/link';
import classNames from 'classnames';
import { ChevronRightIcon } from '@/components/icon';

type RedirectLinkProps = {
  href: string;
  className?: string;
  label: string;
  classNameIcon?: string;
};

export const RedirectLink = ({ href, label, classNameIcon, className }: RedirectLinkProps) => {
  return (
    <Link href={href} className={classNames('text-primary flex flex-row items-center', className)}>
      {label} <ChevronRightIcon className={classNames('w-4 h-4 ml-2 text-primary', classNameIcon)} />
    </Link>
  );
};
