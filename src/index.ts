import opprettPassord from './algoritme/opprett-passord';
import { Separator } from './algoritme/typer';
import varianter, { Variant } from './algoritme/varianter';

const passordOutput = document.getElementById('passord');
const nyttPassordKnapp = document.getElementById('nytt-passord');
const kopierPassordKnapp = document.getElementById('kopier-passord');
const velgVariantSelect = document.getElementById('velg-variant');
const velgSeparatorSelect = document.getElementById('velg-separator');

let valgtVariant = Variant.Standard;
let valgtSeparator = Separator.Mellomrom;

const opprettNyPassordfrase = () => {
    passordOutput.textContent = opprettPassord(varianter[valgtVariant], valgtSeparator);
};

const initialiser = () => {
    nyttPassordKnapp.addEventListener('click', () => {
        opprettNyPassordfrase();
    });

    kopierPassordKnapp.addEventListener('click', () => {
        try {
            navigator.clipboard.writeText(passordOutput.textContent);
        } catch (e) {
            console.error('Kunne ikke kopiere passord til clipboard:', e);
        }
    });

    velgVariantSelect.addEventListener('change', (event) => {
        const alleVarianter = Object.values(Variant);
        const nyVariant = event.target.value;

        if (alleVarianter.includes(nyVariant)) {
            valgtVariant = nyVariant;
            opprettNyPassordfrase();
        } else {
            console.error(`Kunne ikke velge variant "${nyVariant}"`);
        }
    });

    velgSeparatorSelect.addEventListener('change', (event) => {
        const alleSeparatorer = Object.values(Separator);
        const nySeparator = event.target.value;

        if (alleSeparatorer.includes(nySeparator)) {
            valgtSeparator = nySeparator;
            opprettNyPassordfrase();
        } else {
            console.error(`Kunne ikke velge separator "${nySeparator}"`);
        }
    });
};

initialiser();
opprettNyPassordfrase();
