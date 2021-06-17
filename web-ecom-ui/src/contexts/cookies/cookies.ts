import { useState } from 'react';
import { acceptCookies as cookies } from 'src/lib/cookies/client-cookies';

export function useAcceptCookies() {
  const [acceptCookies, setAcceptCookies] = useState(cookies.get());
  return { acceptCookies, setAcceptCookies };
}
