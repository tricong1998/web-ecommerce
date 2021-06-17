import { NextRouter } from 'next/router';
import { ParsedUrlQueryInput } from 'querystring';
import { UrlObject } from 'url';

export const routeBaseLogin = '/login';
export const routeLoginConfig = makeRouteConfig(routeBaseLogin);
export function routeGetLoginUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeLoginConfig, router);
}

export const routeBaseRegister = '/register';
export const routeRegisterConfig = makeRouteConfig(routeBaseRegister);
export function routeGetRegisterUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeRegisterConfig, router);
}

export const routeBaseEmailRegistration = '/register/email/[id]';
export const routeEmailRegistrationConfig = makeRouteConfig(routeBaseEmailRegistration);
export function routeGetEmailRegistrationUrl(router: NextRouter, id: string) {
  return makeUrlObjectFromRouteConfig(routeEmailRegistrationConfig, router, { id });
}

export const routeBaseEmailDealerPending = '/register/email/dealer-pending';
export const routeEmailDealerPendingConfig = makeRouteConfig(routeBaseEmailDealerPending);
export function routeGetEmailDealerPendingUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeEmailDealerPendingConfig, router);
}

export const routeBaseEmailDealerRejected = '/register/email/dealer-rejected';
export const routeEmailDealerRejectedConfig = makeRouteConfig(routeBaseEmailDealerRejected);
export function routeGetEmailDealerRejectedUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeEmailDealerRejectedConfig, router);
}

export const routeBaseSetUpPassword = '/set-up-password/[token]';
export const routeSetUpPasswordConfig = makeRouteConfig(routeBaseSetUpPassword);
export function routeGetSetUpPasswordUrl(router: NextRouter, token: string) {
  return makeUrlObjectFromRouteConfig(routeSetUpPasswordConfig, router, { token });
}

export const routeBaseResetPassword = '/reset-password/[token]';
export const routeResetPasswordConfig = makeRouteConfig(routeBaseResetPassword);
export function routeGetResetPasswordUrl(router: NextRouter, token: string) {
  return makeUrlObjectFromRouteConfig(routeResetPasswordConfig, router, { token });
}

export const routeBaseForceUpdatePassword = '/force-update-password/[token]';
export const routeForceUpdatePasswordConfig = makeRouteConfig(routeBaseForceUpdatePassword);
export function routeGetForceUpdatePasswordUrl(router: NextRouter, token: string) {
  return makeUrlObjectFromRouteConfig(routeForceUpdatePasswordConfig, router, { token });
}

export const routeBaseForgotPassword = '/forgot-password';
export const routeForgotPasswordConfig = makeRouteConfig(routeBaseForgotPassword);
export function routeGetForgotPasswordUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeForgotPasswordConfig, router);
}

export const routeBaseEmailForgotPassword = '/forgot-password/email/[id]';
export const routeEmailForgotPasswordConfig = makeRouteConfig(routeBaseEmailForgotPassword);
export function routeGetEmailForgotPasswordUrl(router: NextRouter, id: string) {
  return makeUrlObjectFromRouteConfig(routeEmailForgotPasswordConfig, router, { id });
}

export const routeBaseVerifyAccount = '/verify-account';
export const routeVerifyAccountConfig = makeRouteConfig(routeBaseVerifyAccount);
export function routeGetVerifyAccountUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeVerifyAccountConfig, router);
}

export const routeBaseEmailVerifyAccount = '/verify-account/email/[id]';
export const routeEmailVerifyAccountConfig = makeRouteConfig(routeBaseEmailVerifyAccount);
export function routeGetEmailVerifyAccountUrl(router: NextRouter, id: string) {
  return makeUrlObjectFromRouteConfig(routeEmailVerifyAccountConfig, router, { id });
}

export const routeBaseUpdatePassword = '/update-password';
export const routeUpdatePasswordConfig = makeRouteConfig(routeBaseUpdatePassword);
export function routeGetUpdatePasswordUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeUpdatePasswordConfig, router);
}

export const routeBaseEmailUpdatePassword = '/update-password/email/[id]';
export const routeEmailUpdatePasswordConfig = makeRouteConfig(routeBaseEmailUpdatePassword);
export function routeGetEmailUpdatePasswordUrl(router: NextRouter, id: string) {
  return makeUrlObjectFromRouteConfig(routeEmailUpdatePasswordConfig, router, { id });
}

export const routeBaseHome = '/';
export const routeHomeConfig = makeRouteConfig(routeBaseHome);
export function routeGetHomeUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeHomeConfig, router);
}

// export const routeBaseWelcome = '/welcome';
// export const routeWelcomeConfig = makeRouteConfig(routeBaseWelcome);
// export function routeGetWelcomeUrl(router: NextRouter) {
//   return makeUrlObjectFromRouteConfig(routeWelcomeConfig, router);
// }

export const routeBaseProductListCatalogue = '/catalogue/[slug]';
export const routeProductListCatalogueConfig = makeRouteConfig(routeBaseProductListCatalogue);
export function routeGetProductListCatalogueUrl(router: NextRouter, slug: string, params = {}) {
  return makeUrlObjectFromRouteConfig(routeProductListCatalogueConfig, router, { slug, ...params });
}

export const routeBaseProductListCategory = '/category/[slug]';
export const routeProductListCategoryConfig = makeRouteConfig(routeBaseProductListCategory);
export function routeGetProductListCategoryUrl(router: NextRouter, slug: string, params = {}) {
  return makeUrlObjectFromRouteConfig(routeProductListCategoryConfig, router, { slug, ...params });
}

export const routeBaseProductDetails = '/product/[slug]';
export const routeProductDetailsConfig = makeRouteConfig(routeBaseProductDetails);
export function routeGetProductDetailsUrl(router: NextRouter, slug: string) {
  return makeUrlObjectFromRouteConfig(routeProductDetailsConfig, router, { slug });
}

export const routeBaseCart = '/cart';
export const routeCartConfig = makeRouteConfig(routeBaseCart);
export function routeGetCartUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeCartConfig, router);
}

export const routeBaseUserOrderHistory = '/user/order/history';
export const routeUserOrderHistoryConfig = makeRouteConfig(routeBaseUserOrderHistory);
export function routeGetUserOrderHistoryUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeUserOrderHistoryConfig, router);
}

export const routeBaseUserOrderDetails = '/user/order/[id]';
export const routeUserOrderDetailsConfig = makeRouteConfig(routeBaseUserOrderDetails);
export const routeUserOrderDetails = routeUserOrderDetailsConfig.merchantPath;
export function routeGetUserOrderDetailsUrl(router: NextRouter, id: string) {
  return makeUrlObjectFromRouteConfig(routeUserOrderDetailsConfig, router, { id });
}

export const routeBaseViewOrder = '/user/order/view/[id]';
export const routeViewOrderConfig = makeRouteConfig(routeBaseViewOrder);
export function routeGetViewOrderUrl(router: NextRouter, id: string) {
  return makeUrlObjectFromRouteConfig(routeViewOrderConfig, router, { id });
}

export const routeBaseEmailOrder = '/user/order/email/[id]';
export const routeEmailOrderConfig = makeRouteConfig(routeBaseEmailOrder);
export function routeGetEmailOrderUrl(router: NextRouter, id: string) {
  return makeUrlObjectFromRouteConfig(routeEmailOrderConfig, router, { id });
}

export const routeBaseUserAddress = '/user/address';
export const routeUserAddressConfig = makeRouteConfig(routeBaseUserAddress);
export function routeGetUserAddressUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeUserAddressConfig, router);
}

export const routeBaseUserAccount = '/user/account';
export const routeUserAccountConfig = makeRouteConfig(routeBaseUserAccount);
export function routeGetUserAccountUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeUserAccountConfig, router);
}

export const routeBaseAboutUs = '/about-us';
export const routeAboutUsConfig = makeRouteConfig(routeBaseAboutUs);
export function routeGetAboutUsUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeAboutUsConfig, router);
}

export const routeBaseFaq = '/frequently-asked-questions';
export const routeFaqConfig = makeRouteConfig(routeBaseFaq);
export function routeGetFaqUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeFaqConfig, router);
}

export const routeBaseContactUs = '/contact-us';
export const routeContactUsConfig = makeRouteConfig(routeBaseContactUs);
export function routeGetContactUsUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeContactUsConfig, router);
}

export const routeBasePrivacyPolicy = '/privacy-policy';
export const routePrivacyPolicyConfig = makeRouteConfig(routeBasePrivacyPolicy);
export function routeGetPrivacyPolicyUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routePrivacyPolicyConfig, router);
}

export const routeBaseTermConditions = '/terms-conditions';
export const routeTermConditionsConfig = makeRouteConfig(routeBaseTermConditions);
export function routeGetTermConditionsUrl(router: NextRouter) {
  return makeUrlObjectFromRouteConfig(routeTermConditionsConfig, router);
}

export const routeBaseOrderThankyou = '/order/[id]/thank-you';
export const routeOrderThankyouConfig = makeRouteConfig(routeBaseOrderThankyou);
export function routeGetOrderThankyouUrl(router: NextRouter, id: string) {
  return makeUrlObjectFromRouteConfig(routeOrderThankyouConfig, router, { id });
}

export const routeNotFound = '/404';

export const PROTECTED_ROUTES = [
  routeUserOrderHistoryConfig.basePath,
  routeUserOrderHistoryConfig.merchantPath,
  routeUserOrderDetailsConfig.basePath,
  routeUserOrderDetailsConfig.merchantPath,
  routeUserAddressConfig.basePath,
  routeUserAddressConfig.merchantPath,
  routeUserAccountConfig.basePath,
  routeUserAccountConfig.merchantPath,
];
export const PROTECTED_ROUTES_SET = new Set(PROTECTED_ROUTES);

export function makeRouteConfig(basePath: string) {
  return {
    basePath,
    merchantPath: prependMerchantCodeToPath(basePath),
  };
}

export function makeUrlObjectFromRouteConfig(
  routeConfig: ReturnType<typeof makeRouteConfig>,
  router: NextRouter,
  query: ParsedUrlQueryInput = {},
) {
  const { merchantcode } = router.query;
  const url: UrlObject = {
    pathname: merchantcode ? routeConfig.merchantPath : routeConfig.basePath,
    query,
  };
  if (url.query && merchantcode) {
    (url.query as ParsedUrlQueryInput).merchantcode = merchantcode;
  }
  return url;
}

// ***************************************
// private
function prependMerchantCodeToPath(path: string) {
  const prefix = '/[merchantcode]';
  if (path === '/') return prefix;
  return `${prefix}${path}`;
}
