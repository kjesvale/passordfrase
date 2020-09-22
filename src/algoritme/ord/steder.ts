type Sted = string;
type BøybartSted = [string, string] | [string, string, string];

const stederINorge: Sted[] = [
    'ål',
    'bergen',
    'berlin',
    'kristiansund',
    'lofoten',
    'london',
    'oslo',
    'råde',
    'rjukan',
    'stavanger',
    'tromsø',
    'trondheim',
];

const stederIUtlandet: Sted[] = ['tokyo', 'paris', 'kyoto', 'madrid'];
const fiktiveSteder: Sted[] = ['galtvort'];
const stederIOslo: Sted[] = ['storo', 'grefsen', 'majorstuen'];
const stederIVerdensrommet: Sted[] = [
    'jupiter',
    'månen',
    'mars',
    'pluto',
    'saturn',
    'sola',
];

const naturen: BøybartSted[] = [
    ['åker', 'åkeren', 'åkerne'],
    ['ås', 'åsen', 'åsene'],
    ['bakke', 'bakken', 'bakkene'],
    ['dal', 'dalen', 'dalene'],
    ['elv', 'elven', 'elvene'],
    ['fjell', 'fjellet', 'fjellene'],
    ['fjord', 'fjorden', 'fjordene'],
    ['foss', 'fossen', 'fossene'],
    ['hav', 'havet', 'havene'],
    ['hule', 'hulen', 'hulene'],
    ['land', 'landet', 'landene'],
    ['landskap', 'landskapet'],
    ['meteor', 'meteoren', 'meteorene'],
    ['ørken', 'ørkenen', 'ørkenene'],
    ['pytt', 'pytten', 'pyttene'],
    ['regn', 'regnet', 'regnet'],
    ['regnbue', 'regnbuen', 'regnbuene'],
    ['sky', 'skyen', 'skyene'],
    ['slette', 'sletten', 'slettene'],
    ['snø', 'snøen', 'snøen'],
    ['stjerne', 'stjernen', 'stjernene'],
    ['tre', 'treet', 'trærne'],
];

const menneskeskapteSteder: BøybartSted[] = [
    ['by', 'byen', 'byene'],
    ['fest', 'festen', 'festene'],
    ['gård', 'gården', 'gårdene'],
    ['gulv', 'gulvet', 'gulvene'],
    ['kino', 'kinoen'],
    ['kjeller', 'kjelleren'],
    ['loft', 'loftet'],
    ['luft', 'lufta', 'luft'],
    ['romskip', 'romskipet', 'romskipene'],
    ['romstasjon', 'romstasjonen'],
    ['tak', 'taket', 'takene'],
    ['tun', 'tunet', 'tunene'],
    ['vei', 'veien', 'veiene'],
];

const objekter: BøybartSted[] = [
    ['benk', 'benken', 'benkene'],
    ['bil', 'bilen', 'bilene'],
    ['bilde', 'bildet', 'bildene'],
    ['bord', 'bordet', 'bordene'],
    ['cyberspace', 'cyberspace'],
    ['gryte', 'gryta', 'grytene'],
    ['hus', 'huset', 'husene'],
    ['internett', 'internett'],
    ['lampe', 'lampen', 'lampene'],
    ['plakat', 'plakaten'],
    ['sofa', 'sofaen', 'sofaene'],
    ['stol', 'stolen', 'stolene'],
    ['suppe', 'suppa', 'suppene'],
    ['teppe', 'teppet', 'teppene'],
    ['tønne', 'tønna', 'tønnene'],
];

const fjernUndefined = (item?: string) => item !== undefined;

export const stederIkkeBøybare = [
    ...stederINorge,
    ...stederIUtlandet,
    ...fiktiveSteder,
    ...stederIOslo,
    ...stederIVerdensrommet,
];

export const stederBøybare = [...menneskeskapteSteder, ...naturen, ...objekter];

export const stederUbestemt: string[] = [
    ...stederIkkeBøybare,
    ...stederBøybare.map(([ubestemt]) => ubestemt),
];

export const stederBestemt: string[] = stederBøybare.map(
    ([ubestemt, bestemt]) => bestemt
);
export const stederBestemtFlertall: string[] = stederBøybare
    .map(([ubestemt, bestemt, bestemtFlertall]) => bestemtFlertall)
    .filter(fjernUndefined);

export default [...stederIkkeBøybare, ...stederBøybare];
