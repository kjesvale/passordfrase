import opprettPassord, { antallMuligeKombinasjoner } from './algoritme/opprett-passord';
import { Ordklasse } from './algoritme/typer';

enum Variant {
    Standard = 'standard',
    Kortere = 'kortere',
    Lengre = 'lengre',
}

const varianter = {
    [Variant.Standard]: [
        Ordklasse.Adjektiv,
        Ordklasse.SubjektUbestemt,
        Ordklasse.Verb,
        Ordklasse.PreposisjonEntall,
        Ordklasse.StederBestemt,
    ],
    [Variant.Kortere]: [
        Ordklasse.SubjektBestemt,
        Ordklasse.Verb,
        Ordklasse.Adverb,
        Ordklasse.PreposisjonEntall,
        Ordklasse.StederBestemt,
    ],
    [Variant.Lengre]: [
        Ordklasse.Adjektiv,
        Ordklasse.SubjektUbestemt,
        Ordklasse.Verb,
        Ordklasse.Adverb,
        Ordklasse.PreposisjonEntall,
        Ordklasse.StederBestemt,
    ],
};

// const femTilfeldigeOrd: Ordklasse[] = Array(5).fill(Ordklasse.AlleOrd);

const passordOutput = document.querySelector('#passord');
const nyttPassordKnapp = document.querySelector('#nytt-passord');
const kopierPassordKnapp = document.querySelector('#kopier-passord');
const velgVariantSelect = document.querySelector('#velg-variant');

const brukVariant = (variant: Variant) => {
    passordOutput.textContent = opprettPassord(varianter[variant]);
};

let valgtVariant = Variant.Standard;

brukVariant(valgtVariant);

nyttPassordKnapp.addEventListener('click', (e) => {
    brukVariant(valgtVariant);
});

kopierPassordKnapp.addEventListener('click', (e) => {
    try {
        navigator.clipboard.writeText(passordOutput.textContent);
    } catch (e) {
        console.error('Kunne ikke kopiere passord til clipboard:', e);
    }
});

velgVariantSelect.addEventListener('change', (e) => {
    valgtVariant = e.target.value;
    brukVariant(valgtVariant);
});
