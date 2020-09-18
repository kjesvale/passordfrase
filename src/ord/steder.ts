type Sted = string;
type BøybartSted = [string, string] | [string, string, string];

const byer: Sted[] = [
    'ål',
    'bergen',
    'berlin',
    'galtvort',
    'kristiansund',
    'kyoto',
    'lofoten',
    'london',
    'madrid',
    'oslo',
    'paris',
    'råde',
    'rjukan',
    'stavanger',
    'tokyo',
    'tromsø',
    'trondheim',
];

const stederIOslo: Sted[] = ['storo', 'grefsen', 'majorstuen'];

const stederIVerdensrommet: Sted[] = ['jupiter', 'månen', 'mars', 'pluto', 'saturn', 'sola'];

const naturen: BøybartSted[] = [
    ['åker', 'åkeren', 'åkerne'],
    ['ås', 'åser', 'åsene'],
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
    ['benk', 'benken', 'benkene'],
    ['bilde', 'bildet', 'bildene'],
    ['bord', 'bordet', 'bordene'],
    ['by', 'byen', 'byene'],
    ['fest', 'festen', 'festene'],
    ['gård', 'gården', 'gårdene'],
    ['gryte', 'gryta', 'grytene'],
    ['gulv', 'gulvet', 'gulvene'],
    ['kino', 'kinoen'],
    ['kjeller', 'kjelleren'],
    ['lampe', 'lampen', 'lampene'],
    ['loft', 'loftet'],
    ['luft', 'lufta', 'luft'],
    ['plakat', 'plakaten'],
    ['romskip', 'romskipet', 'romskipene'],
    ['romstasjon', 'romstasjonen'],
    ['stol', 'stolen', 'stolene'],
    ['suppe', 'suppa', 'suppene'],
    ['tak', 'taket', 'takene'],
    ['teppe', 'teppet', 'teppene'],
    ['tun', 'tunet', 'tunene'],
    ['vei', 'veien', 'veiene'],
];

const objekter: BøybartSted[] = [
    ['bil', 'bilen', 'bilene'],
    ['cyberspace', 'cyberspace'],
    ['hus', 'huset', 'husene'],
    ['internett', 'internett'],
];

const fjernUndefined = (item?: string) => item !== undefined;

export const stederIkkeBøybare = [...byer, ...stederIOslo, ...stederIVerdensrommet];
export const stederBøybare = [...menneskeskapteSteder, ...naturen, ...objekter];

export const stederUbestemt: string[] = [
    ...stederIkkeBøybare,
    ...stederBøybare.map(([ubestemt]) => ubestemt),
];

export const stederBestemt: string[] = stederBøybare.map(([ubestemt, bestemt]) => bestemt);
export const stederBestemtFlertall: string[] = stederBøybare
    .map(([ubestemt, bestemt, bestemtFlertall]) => bestemtFlertall)
    .filter(fjernUndefined);

export default [...stederIkkeBøybare, ...stederBøybare];
