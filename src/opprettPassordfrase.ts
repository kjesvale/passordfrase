import { subjekterUbestemt, subjekterBestemt } from './ord/subjekter';
import { stederBestemt, stederUbestemt, stederBestemtFlertall } from './ord/steder';
import adjektiv from './ord/adjektiv';
import adverb from './ord/adverb';
import preposisjoner, { preposisjonerEntall, preposisjonerFlertall } from './ord/preposisjoner';
import verb from './ord/verb';

type Setning = string[][];

export enum Ordklasse {
    Adjektiv,
    SubjektUbestemt,
    SubjektBestemt,
    Verb,
    Adverb,
    PreposisjonEntall,
    PreposisjonFlertall,
    StederUbestemt,
    StederBestemt,
    StederBestemtFlertall,
}

type SmartSetning = Ordklasse[];

const ordklasser: Record<Ordklasse, string[]> = {
    [Ordklasse.Adjektiv]: adjektiv,
    [Ordklasse.SubjektUbestemt]: subjekterUbestemt,
    [Ordklasse.SubjektBestemt]: subjekterBestemt,
    [Ordklasse.Verb]: verb,
    [Ordklasse.Adverb]: adverb,
    [Ordklasse.PreposisjonEntall]: preposisjonerEntall,
    [Ordklasse.PreposisjonFlertall]: preposisjonerFlertall,
    [Ordklasse.StederUbestemt]: stederUbestemt,
    [Ordklasse.StederBestemt]: stederBestemt,
    [Ordklasse.StederBestemtFlertall]: stederBestemtFlertall,
};

enum Separator {
    Space = ' ',
    Dot = '.',
    Dash = '-',
    Underscore = '_',
}

const alleOrd = [
    ...subjekterUbestemt,
    ...verb,
    ...adverb,
    ...preposisjoner,
    ...stederUbestemt,
    ...adjektiv,
];

const velgTilfeldigOrd = (ordklasse: string[]) =>
    ordklasse[Math.floor(Math.random() * (ordklasse.length - 1))];

const hentMuligeKombinasjoner = (setning: Setning) =>
    setning.reduce((numberOfCombinations, words) => numberOfCombinations * words.length, 1);

const hentMuligeKombinasjonerFraSmartSetning = (smartSetning: SmartSetning) =>
    smartSetning.reduce(
        (numberOfCombinations, ordklasse) => numberOfCombinations * ordklasser[ordklasse].length,
        1
    );

const erstattMellomromMedSeparator = (ord: string, separator: Separator) =>
    ord.replace(/ /g, separator);

const opprettPassordfrase = (setning: Setning, separator: Separator = Separator.Space): string =>
    setning.reduce(
        (frase: string, ordklasse, index) =>
            `${frase}${index > 0 ? separator : ''}${erstattMellomromMedSeparator(
                velgTilfeldigOrd(ordklasse),
                separator
            )}`,
        ''
    );

const opprettSmartPassordfrase = (
    smartSetning: SmartSetning,
    separator: Separator = Separator.Space
): string => {
    let passordfrase = '';

    smartSetning.forEach((ordklasse, index) => {
        if (index > 0) {
            passordfrase += separator;
        }

        const muligeOrd = ordklasser[ordklasse];
        const tilfeldigOrd = velgTilfeldigOrd(muligeOrd);

        return (passordfrase += tilfeldigOrd);
    });

    return passordfrase;
};

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
    stederBestemt,
];

const tilfeldigSetning: Setning = [alleOrd, alleOrd, alleOrd, alleOrd, alleOrd, alleOrd];

const smartAlternativSetning: Ordklasse[] = [
    Ordklasse.Adjektiv,
    Ordklasse.SubjektUbestemt,
    Ordklasse.Verb,
    Ordklasse.Adverb,
    Ordklasse.PreposisjonEntall,
    Ordklasse.StederBestemt,
];

const smartAlternativSetningFlertall: Ordklasse[] = [
    Ordklasse.Adjektiv,
    Ordklasse.SubjektUbestemt,
    Ordklasse.Verb,
    Ordklasse.Adverb,
    Ordklasse.PreposisjonFlertall,
    Ordklasse.StederBestemtFlertall,
];

console.log(opprettPassordfrase(standardSetning), hentMuligeKombinasjoner(standardSetning));
console.log(opprettPassordfrase(alternativSetning), hentMuligeKombinasjoner(alternativSetning));
console.log(opprettPassordfrase(langSetning), hentMuligeKombinasjoner(langSetning));
console.log(opprettPassordfrase(tilfeldigSetning), hentMuligeKombinasjoner(tilfeldigSetning));

console.log(
    opprettSmartPassordfrase(smartAlternativSetning),
    hentMuligeKombinasjonerFraSmartSetning(smartAlternativSetning)
);

console.log(
    opprettSmartPassordfrase(smartAlternativSetningFlertall),
    hentMuligeKombinasjonerFraSmartSetning(smartAlternativSetningFlertall)
);
