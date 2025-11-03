import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { hasLocale } from 'next-intl';

export default getRequestConfig(async ({ requestLocale }) => {
  const request = await requestLocale;
  const locale = hasLocale(routing.locales, request) ? request : routing.defaultLocale;

  const messages = {
    ...(await import(`../../messages/${locale}/navbar.json`)).default,
    ...(await import(`../../messages/${locale}/header.json`)).default,
    ...(await import(`../../messages/${locale}/about.json`)).default,
    ...(await import(`../../messages/${locale}/skills.json`)).default,
    ...(await import(`../../messages/${locale}/projects.json`)).default,
    ...(await import(`../../messages/${locale}/experience.json`)).default,
    ...(await import(`../../messages/${locale}/contacts.json`)).default,
  };

  return {
    locale,
    messages,
  };
});
