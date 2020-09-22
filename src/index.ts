import opprettPassord, {
    antallMuligeKombinasjoner,
} from './algoritme/opprett-passord';
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
    passordOutput.textContent = opprettPassord(
        varianter[valgtVariant],
        valgtSeparator
    );
};

const oppdaterPassordfraseMedNySeparator = (
    gammelSeparator: Separator,
    nySeparator: Separator
) => {
    passordOutput.textContent = passordOutput.textContent
        .split(gammelSeparator)
        .join(nySeparator);
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
        const nyVariant = (<HTMLSelectElement>event.target).value as Variant;

        if (alleVarianter.includes(nyVariant)) {
            valgtVariant = nyVariant;
            opprettNyPassordfrase();

            console.log(
                `Valgte variant '${valgtVariant}', antall mulige kombinasjoner: ${antallMuligeKombinasjoner(
                    varianter[valgtVariant]
                )}`
            );
        } else {
            console.error(`Kunne ikke velge variant "${nyVariant}"`);
        }
    });

    velgSeparatorSelect.addEventListener('change', (event) => {
        const alleSeparatorer = Object.values(Separator);
        const nySeparator = (<HTMLSelectElement>event.target)
            .value as Separator;

        if (alleSeparatorer.includes(nySeparator)) {
            oppdaterPassordfraseMedNySeparator(valgtSeparator, nySeparator);
            valgtSeparator = nySeparator;
        } else {
            console.error(`Kunne ikke velge separator "${nySeparator}"`);
        }
    });
};

initialiser();
opprettNyPassordfrase();
