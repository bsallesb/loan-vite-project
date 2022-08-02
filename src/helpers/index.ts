export const brazilianDateToJS = (date: string): string => {
  const dateParts = date.split('/');

  return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
};

export const formatDate = (value: string, locale = 'pt-BR'): string =>
  new Date(value).toLocaleString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const rateToPercentage = (value: number): number => value * 100;

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export const currencyToFloat = (value: string): number =>
  parseFloat(
    value.replaceAll('R$ ', '').replaceAll('.', '').replaceAll(',', '.'),
  );
