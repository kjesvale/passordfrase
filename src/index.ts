import opprettPassord, { antallMuligeKombinasjoner } from './algoritme/opprett-passord';
import { Ordklasse } from './algoritme/typer';

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

const passordOutput = document.querySelector('output#passord');
passordOutput.textContent = opprettPassord(alternativSetning);
