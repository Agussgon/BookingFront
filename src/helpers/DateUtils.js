export const formatDate = (date, cultureLang, config) => {
  const culture = cultureLang || 'es-CO';
  const conf = config || {day:'2-digit',month:'2-digit', year:'numeric'};
  return new Intl.DateTimeFormat(culture,conf).format(date);
 }