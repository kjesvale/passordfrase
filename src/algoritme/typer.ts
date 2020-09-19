export type Ordsett = string[];

export enum Separator {
    Mellomrom = ' ',
    Punktum = '.',
    Bindestrek = '-',
    Understrek = '_',
}

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
    AlleOrd,
}
