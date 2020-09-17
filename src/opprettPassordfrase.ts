import { ubestemteSubjekter, bestemteSubjekter } from './ord/subjekter';
import adjektiv from './ord/adjektiv';
import adverb from './ord/adverb';
import preposisjoner from './ord/preposisjoner';
import steder from './ord/steder';
import verb from './ord/verb';

type Setning = string[][];

enum Separator {
    Space = ' ',
    Dot = '.',
    Dash = '-',
    Underscore = '_',
}

const velgTilfeldigOrd = (ordklasse: string[]) =>
    ordklasse[Math.round(Math.random() * (ordklasse.length - 1))];

const hentMuligeKombinasjoner = (setningstype: Setning) =>
    setningstype.reduce((numberOfCombinations, words) => numberOfCombinations * words.length, 1);

const opprettPassordfrase: string = (setningstype: Setning, separator: Separator = ' ') =>
    setningstype.reduce(
        (frase: string, ordklasse, index) =>
            frase + (index > 0 ? separator : '') + velgTilfeldigOrd(ordklasse),
        ''
    );

const standardSetning: Setning = [bestemteSubjekter, verb, adverb, preposisjoner, steder];
const alternativSetning: Setning = [adjektiv, ubestemteSubjekter, verb, preposisjoner, steder];
const langSetning: Setning = [adjektiv, ubestemteSubjekter, verb, adverb, preposisjoner, steder];

const alleOrd = [
    ...ubestemteSubjekter,
    ...verb,
    ...adverb,
    ...preposisjoner,
    ...steder,
    ...adjektiv,
];

const tilfeldigSetning: Setning = [alleOrd, alleOrd, alleOrd, alleOrd, alleOrd, alleOrd];

console.log(opprettPassordfrase(standardSetning), hentMuligeKombinasjoner(standardSetning));
console.log(opprettPassordfrase(alternativSetning), hentMuligeKombinasjoner(alternativSetning));
console.log(opprettPassordfrase(langSetning), hentMuligeKombinasjoner(langSetning));
console.log(opprettPassordfrase(tilfeldigSetning), hentMuligeKombinasjoner(tilfeldigSetning));
