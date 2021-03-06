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

export const antallMuligeKombinasjoner = (setning: Ordklasse[]) =>
    setning.reduce(
        (numberOfCombinations, ordklasse) =>
            numberOfCombinations * alleOrdsett[ordklasse].length,
        1
    );

const opprettPassord = (
    setning: Ordklasse[],
    separator: Separator = Separator.Mellomrom
): string =>
    setning
        .map((ordklasse) => velgTilfeldigOrd(alleOrdsett[ordklasse]))
        .join(separator);

export default opprettPassord;
