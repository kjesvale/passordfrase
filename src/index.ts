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

const passordOutput = document.querySelector('#passord');
const nyttPassordKnapp = document.querySelector('#nytt-passord');
const kopierPassordKnapp = document.querySelector('#kopier-passord');

passordOutput.textContent = opprettPassord(alternativSetning);

nyttPassordKnapp.addEventListener('click', (e) => {
    passordOutput.textContent = opprettPassord(alternativSetning);
});

kopierPassordKnapp.addEventListener('click', (e) => {
    try {
        navigator.clipboard.writeText(passordOutput.textContent);
    } catch (e) {
        console.error('Kunne ikke kopiere passord til clipboard:', e);
    }
}