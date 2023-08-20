import { Routes } from '@/constants/routes';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Image404Desktop from '../../../../public/images/errors/404-desktop.jpg';
import Image404Mobile from '../../../../public/images/errors/404-mobile.jpg';
import { RedirectLink } from './redirectLink';

export const Layout404 = () => {
  return (
    <div className="w-full h-full flex lg:flex-row flex-col">
      <Image404></Image404>
      <Error404></Error404>
    </div>
  );
};

export const Image404 = () => {
  return (
    <>
      <Image
        alt="404"
        className="image hidden lg:w-1/2 lg:h-auto lg:block object-fill"
        src={Image404Desktop}
      />
      <Image alt="404" className="image lg:hidden object-fill w-full h-full" src={Image404Mobile} />
    </>
  );
};

export const Error404 = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:mt-60 lg:ml-24 lg:mr-32 lg:mb-20 flex flex-col mt-5 mx-5">
      <h1 className="mb-2">
        {t`error.oops`}
        <br />
        {t`error.something-went-wrong`}
      </h1>
      <p className="mb-8">{t`error.try-one`}</p>
      <div className="flex flex-col">
        <RedirectLink href={Routes.HOME} label={t`errors.go-to-home`}></RedirectLink>
        <RedirectLink href={Routes.HOME} label={t`errors.how-to-contact-us`}></RedirectLink>
        <RedirectLink href={Routes.HOME} label={t`errors.checkout-faq`}></RedirectLink>
      </div>
    </div>
  );
};
