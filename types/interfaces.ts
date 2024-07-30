export interface IPROFILE_PICTURE {
  public_id: string;
  url: string;
}

export interface IAyah {
  number: number;
  audio: string | null;
  audioSecondary: string[] | null;
  text: string;
  numberInSurah: number;
  juz: number;
  manzil: number;
  page: number;
  ruku: number;
  hizbQuarter: number;
  sajda: boolean;
}

export interface ISurah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  ayahs: IAyah[];
}

export interface IEdition {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
  format: string;
  type: string;
}

export interface IQuranData {
  edition: IEdition;
  surahs: ISurah[];
}
