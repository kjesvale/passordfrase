import { subjekterUbestemt, subjekterBestemt } from './ord/subjekter';
import { stederBestemt, stederUbestemt, stederBestemtFlertall } from './ord/steder';
import adjektiv from './ord/adjektiv';
import adverb from './ord/adverb';
import preposisjoner from './ord/preposisjoner';
import verb from './ord/verb';

type Setning = string[][];

enum Separator {
    Space = ' ',
    Dot = '.',
    Dash = '-',
    Underscore = '_',
}

const velgTilfeldigOrd = (ordklasse: string[]) =>
    ordklasse[Math.floor(Math.random() * (ordklasse.length - 1))];

const hentMuligeKombinasjoner = (setningstype: Setning) =>
    setningstype.reduce((numberOfCombinations, words) => numberOfCombinations * words.length, 1);

const erstattMellomromMedSeparator = (ord: string, separator: Separator) =>
    ord.replace(/ /g, separator);

const opprettPassordfrase = (
    setningstype: Setning,
    separator: Separator = Separator.Space
): string =>
    setningstype.reduce(
        (frase: string, ordklasse, index) =>
            `${frase}${index > 0 ? separator : ''}${erstattMellomromMedSeparator(
                velgTilfeldigOrd(ordklasse),
                separator
            )}`,
        ''
    );

const standardSetning: Setning = [subjekterBestemt, verb, adverb, preposisjoner, stederBestemt];

const alternativSetning: Setning = [
    adjektiv,
    subjekterUbestemt,
    verb,
    preposisjoner,
    stederBestemt,
];

const langSetning: Setning = [
    adjektiv,
    subjekterUbestemt,
    verb,
    adverb,
    preposisjoner,
    stederUbestemt,
];

const alleOrd = [
    ...subjekterUbestemt,
    ...verb,
    ...adverb,
    ...preposisjoner,
    ...stederUbestemt,
    ...adjektiv,
];

const tilfeldigSetning: Setning = [alleOrd, alleOrd, alleOrd, alleOrd, alleOrd, alleOrd];

console.log(opprettPassordfrase(standardSetning), hentMuligeKombinasjoner(standardSetning));
console.log(opprettPassordfrase(alternativSetning), hentMuligeKombinasjoner(alternativSetning));
console.log(opprettPassordfrase(langSetning), hentMuligeKombinasjoner(langSetning));
console.log(opprettPassordfrase(tilfeldigSetning), hentMuligeKombinasjoner(tilfeldigSetning));
