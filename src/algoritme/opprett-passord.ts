import { Ordklasse, Ordsett, Separator } from './typer';
import ord from './ord/index';

const alleOrd = [
    ...ord.subjekterUbestemt,
    ...ord.verb,
    ...ord.adverb,
    ...ord.preposisjoner,
    ...ord.stederUbestemt,
    ...ord.adjektiv,
];

const alleOrdsett: Record<Ordklasse, Ordsett> = {
    [Ordklasse.Adjektiv]: ord.adjektiv,
    [Ordklasse.SubjektUbestemt]: ord.subjekterUbestemt,
    [Ordklasse.SubjektBestemt]: ord.subjekterBestemt,
    [Ordklasse.Verb]: ord.verb,
    [Ordklasse.Adverb]: ord.adverb,
    [Ordklasse.PreposisjonEntall]: ord.preposisjonerEntall,
    [Ordklasse.PreposisjonFlertall]: ord.preposisjonerFlertall,
    [Ordklasse.StederUbestemt]: ord.stederUbestemt,
    [Ordklasse.StederBestemt]: ord.stederBestemt,
    [Ordklasse.StederBestemtFlertall]: ord.stederBestemtFlertall,
    [Ordklasse.AlleOrd]: alleOrd,
};

const velgTilfeldigOrd = (ordsett: Ordsett) => {
    const index = Math.floor(Math.random() * (ordsett.length - 1));
    return ordsett[index];
};

const antallMuligeKombinasjoner = (setning: Ordklasse[]) =>
    setning.reduce(
        (numberOfCombinations, ordklasse) => numberOfCombinations * alleOrdsett[ordklasse].length,
        1
    );

const erstattMellomromMedSeparator = (ord: string, separator: Separator) =>
    ord.replace(/ /g, separator);

const opprettPassord = (setning: Ordklasse[], separator: Separator = Separator.Space): string => {
    let passordfrase = '';

    setning.forEach((ordklasse, index) => {
        if (index > 0) {
            passordfrase += separator;
        }

        const muligeOrd = alleOrdsett[ordklasse];
        const tilfeldigOrd = velgTilfeldigOrd(muligeOrd);
        const medSeparator = erstattMellomromMedSeparator(tilfeldigOrd, separator);

        return (passordfrase += medSeparator);
    });

    return passordfrase;
};

const standardSetning: Ordklasse[] = [
    Ordklasse.SubjektBestemt,
    Ordklasse.Verb,
    Ordklasse.Adverb,
    Ordklasse.PreposisjonEntall,
    Ordklasse.StederBestemt,
];

const alternativSetning: Ordklasse[] = [
    Ordklasse.Adjektiv,
    Ordklasse.SubjektUbestemt,
    Ordklasse.Verb,
    Ordklasse.PreposisjonEntall,
    Ordklasse.StederBestemt,
];

const kombinertSetning: Ordklasse[] = [
    Ordklasse.Adjektiv,
    Ordklasse.SubjektUbestemt,
    Ordklasse.Verb,
    Ordklasse.Adverb,
    Ordklasse.PreposisjonEntall,
    Ordklasse.StederBestemt,
];

const femTilfeldigeOrd: Ordklasse[] = Array(5).fill(Ordklasse.AlleOrd);

console.log(opprettPassord(standardSetning), antallMuligeKombinasjoner(standardSetning));
console.log(opprettPassord(alternativSetning), antallMuligeKombinasjoner(alternativSetning));
console.log(opprettPassord(kombinertSetning), antallMuligeKombinasjoner(kombinertSetning));
console.log(opprettPassord(femTilfeldigeOrd), antallMuligeKombinasjoner(femTilfeldigeOrd));

export default opprettPassord;
