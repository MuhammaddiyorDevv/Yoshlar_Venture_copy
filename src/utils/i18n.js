export const defaultLang = 'uz';
export const supported = ['uz', 'en', 'ru'];

export function getLang(pathname) {
  const [, maybe] = pathname.split('/');
  return supported.includes(maybe) ? maybe : defaultLang;
}

export async function getStrings(lang) {
  try {
    const mod = await import(`../locales/${lang}.json`);
    return mod.default || mod;
  } catch {
    const mod = await import(`../locales/${defaultLang}.json`);
    return mod.default || mod;
  }
}