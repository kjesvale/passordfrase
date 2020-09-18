export type Ordsett = string[];

export enum Separator {
    Space = ' ',
    Dot = '.',
    Dash = '-',
    Underscore = '_',
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
