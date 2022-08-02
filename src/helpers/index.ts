export const formatDate = (value: string, locale = 'pt-BR'): string =>
  new Date(value).toLocaleString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const percentage = (value: number): number => value * 100;

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export const date = (value: string): string => {
  const splitedDate = value.split('/');

  return splitedDate[0];
};
