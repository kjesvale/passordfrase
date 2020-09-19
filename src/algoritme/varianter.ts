import { Ordklasse } from "./typer";

export enum Variant {
    Standard = 'standard',
    Kortere = 'kortere',
    Lengre = 'lengre',
    Tilfeldig = 'tilfeldig',
}

const varianter: Record<Variant, Ordklasse[]> = {
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
    [Variant.Tilfeldig]: Array(5).fill(Ordklasse.AlleOrd),
};

export default varianter;