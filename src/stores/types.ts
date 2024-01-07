

export interface SongWord {
  id: string;
  word: string;
  isHidden: boolean;
  isTrap: boolean;
}

export interface Song {
  id: string;
  words: SongWord[];
  name: string;
  artist: string;
}
