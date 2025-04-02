/**
 * Formata período de experiência com data final customizável
 * @param startDate Data de início (YYYY-MM-DD)
 * @param options Opções: {
 *   isCurrent?: boolean;
 *   endDate?: string; // Data final (YYYY-MM-DD)
 *   language?: 'en' | 'pt';
 * }
 */
export const formatExperiencePeriod = (
  startDate: string,
  options: {
    isCurrent?: boolean;
    endDate?: string;
    language?: 'en' | 'pt';
  } = {}
): string => {
  const {
    isCurrent = true,
    endDate,
    language = 'en'
  } = options;

  // Dicionário de traduções
  const translations = {
    en: {
      current: 'Present',
      month: ['month', 'months'],
      year: ['year', 'years'],
      and: 'and',
      unavailable: 'Period unavailable'
    },
    pt: {
      current: 'Atual',
      month: ['mês', 'meses'],
      year: ['ano', 'anos'],
      and: 'e',
      unavailable: 'Período indisponível'
    }
  };

  try {
    const start = new Date(startDate);
    if (isNaN(start.getTime())) throw new Error('Invalid start date');

    // Determina a data final
    let end: Date;
    if (endDate) {
      end = new Date(endDate);
    } else if (isCurrent) {
      end = new Date();
    } else {
      throw new Error('End date required when isCurrent=false');
    }

    if (isNaN(end.getTime())) throw new Error('Invalid end date');

    // Formatação das datas
    const startFormatted = start.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC'
    }).replace('.', '');

    const endFormatted = isCurrent
      ? translations[language].current
      : end.toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US', {
          month: 'short',
          year: 'numeric',
          timeZone: 'UTC'
        }).replace('.', '');

    // Cálculo da duração
    let totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + 
                     (end.getMonth() - start.getMonth());
    totalMonths = Math.max(0, totalMonths);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // Monta o texto da duração
    const durationParts = [];
    if (years > 0) {
      durationParts.push(`${years} ${translations[language].year[years === 1 ? 0 : 1]}`);
    }
    if (months > 0) {
      durationParts.push(`${months} ${translations[language].month[months === 1 ? 0 : 1]}`);
    }

    const durationText = durationParts.join(` ${translations[language].and} `);

    return `${startFormatted} - ${endFormatted} (${durationText})`;
  } catch (error) {
    console.error('Error formatting experience period:', error);
    return translations[language].unavailable;
  }
};