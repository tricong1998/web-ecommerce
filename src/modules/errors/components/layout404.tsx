import { Routes } from '@/constants/routes';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import logoPic from '../../../../public/images/errors/404-desktop.jpg';
import { RedirectLink } from './redirectLink';

export const Layout404 = () => {
  return (
    <div className="w-full h-full flex lg:flex-row">
      <Image404></Image404>
      <Error404></Error404>
    </div>
  );
};

export const Image404 = () => {
  return <Image alt="404" className="image lg:w-1/2 lg:h-auto lg:block object-contain" src={logoPic} />;
};

export const Error404 = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:mt-60 lg:ml-24 lg:mr-32 lg:mb-20 flex flex-col">
      <h1 className='mb-2'>
          {t`error.oops`}
          <br />
          {t`error.something-went-wrong`}
        </h1>
      <p className='mb-8'>{t`error.try-one`}</p>
      <div className="flex flex-col">
        <RedirectLink href={Routes.HOME} label={t`errors.go-to-home`}></RedirectLink>
        <RedirectLink href={Routes.HOME} label={t`errors.how-to-contact-us`}></RedirectLink>
        <RedirectLink href={Routes.HOME} label={t`errors.checkout-faq`}></RedirectLink>
      </div>
    </div>
  );
};
