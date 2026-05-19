export const ALBUM_TOTAL_STICKERS = 994;

export const specials = [
  {
    id: 'fwc',
    name: 'FWC Icons',
    flag: '🏆',
    count: 20,
    startOffset: 0, // from 0 to 19
  },
  {
    id: 'cocacola',
    name: 'Coca-Cola',
    flag: '🥤',
    count: 14,
    startOffset: 1, // from 1 to 14
  }
];

const countryList = [
  { name: 'Alemania', id: 'ger', flag: '🇩🇪' },
  { name: 'Arabia Saudita', id: 'ksa', flag: '🇸🇦' },
  { name: 'Argelia', id: 'alg', flag: '🇩🇿' },
  { name: 'Argentina', id: 'arg', flag: '🇦🇷' },
  { name: 'Australia', id: 'aus', flag: '🇦🇺' },
  { name: 'Austria', id: 'aut', flag: '🇦🇹' },
  { name: 'Bélgica', id: 'bel', flag: '🇧🇪' },
  { name: 'Bosnia y Herzegovina', id: 'bih', flag: '🇧🇦' },
  { name: 'Brasil', id: 'bra', flag: '🇧🇷' },
  { name: 'Cabo Verde', id: 'cpv', flag: '🇨🇻' },
  { name: 'Canadá', id: 'can', flag: '🇨🇦' },
  { name: 'Colombia', id: 'col', flag: '🇨🇴' },
  { name: 'Congo', id: 'cgo', flag: '🇨🇬' },
  { name: 'Corea del Sur', id: 'kor', flag: '🇰🇷' },
  { name: 'Costa de Marfil', id: 'civ', flag: '🇨🇮' },
  { name: 'Croacia', id: 'cro', flag: '🇭🇷' },
  { name: 'Curazao', id: 'cuw', flag: '🇨🇼' },
  { name: 'Ecuador', id: 'ecu', flag: '🇪🇨' },
  { name: 'Egipto', id: 'egy', flag: '🇪🇬' },
  { name: 'Escocia', id: 'sco', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  { name: 'España', id: 'esp', flag: '🇪🇸' },
  { name: 'Estados Unidos', id: 'usa', flag: '🇺🇸' },
  { name: 'Francia', id: 'fra', flag: '🇫🇷' },
  { name: 'Ghana', id: 'gha', flag: '🇬🇭' },
  { name: 'Haití', id: 'hai', flag: '🇭🇹' },
  { name: 'Inglaterra', id: 'eng', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { name: 'Irán', id: 'irn', flag: '🇮🇷' },
  { name: 'Iraq', id: 'irq', flag: '🇮🇶' },
  { name: 'Japón', id: 'jpn', flag: '🇯🇵' },
  { name: 'Jordania', id: 'jor', flag: '🇯🇴' },
  { name: 'Marruecos', id: 'mar', flag: '🇲🇦' },
  { name: 'México', id: 'mex', flag: '🇲🇽' },
  { name: 'Noruega', id: 'nor', flag: '🇳🇴' },
  { name: 'Nueva Zelanda', id: 'nzl', flag: '🇳🇿' },
  { name: 'Países Bajos', id: 'ned', flag: '🇳🇱' },
  { name: 'Panamá', id: 'pan', flag: '🇵🇦' },
  { name: 'Paraguay', id: 'par', flag: '🇵🇾' },
  { name: 'Portugal', id: 'por', flag: '🇵🇹' },
  { name: 'Qatar', id: 'qat', flag: '🇶🇦' },
  { name: 'República Checa', id: 'cze', flag: '🇨🇿' },
  { name: 'Senegal', id: 'sen', flag: '🇸🇳' },
  { name: 'Sudáfrica', id: 'rsa', flag: '🇿🇦' },
  { name: 'Suecia', id: 'swe', flag: '🇸🇪' },
  { name: 'Suiza', id: 'sui', flag: '🇨🇭' },
  { name: 'Túnez', id: 'tun', flag: '🇹🇳' },
  { name: 'Turquía', id: 'tur', flag: '🇹🇷' },
  { name: 'Uruguay', id: 'uru', flag: '🇺🇾' },
  { name: 'Uzbekistán', id: 'uzb', flag: '🇺🇿' }
];

export const countries = countryList.map(c => ({
  ...c,
  count: 20,
  startOffset: 1
}));

export const allSections = [...specials, ...countries];
