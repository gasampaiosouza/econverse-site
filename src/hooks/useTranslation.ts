/**
 * hook that helps you to translate the website as needed.
 *
 * @returns An object containing:
 *  t - converts a given [object.key] to a text based on the current website language.
 *  locale - the current website language with 2 letters ('en', for example).
 *  changeLanguage - a function that changes the website's language to the one it receives as a parameter ('br', for example).
 *
 * @example using translation hook
 *
 * # inside a react functional component
 * ```ts
 * import { useTranslation } from 'src/hooks/useTranslation';
 *
 * const { t, locale, changeLanguage } = useTranslation();
 * ```
 *
 * # usage (already returning JSX)
 * ```ts
 *  return (
 *    <div>
 *      <h1>{t['header.social']}</h1>
 *    </div>
 *  )
 * ```
 *
 * # result
 * ```ts
 * // BR
 * -> Nos siga nas redes
 *
 * // EN
 * -> Follow our networks
 * ```
 */

import { useRouter } from 'next/router';

import pt from 'src/translations/pt';
import en from 'src/translations/en';

export function useTranslation() {
  const router = useRouter();
  const currentLocale = router.locale == 'en' ? en : pt;

  const changeLanguage = (language: 'pt' | 'en') => {
    const currentURL = window.location.pathname || '/';

    router.push(currentURL, currentURL, { locale: language });
  };

  return {
    t: currentLocale,
    locale: router.locale,
    changeLanguage,
  };
}
