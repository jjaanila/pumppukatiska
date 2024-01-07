import { defineStore } from "pinia";
import { type Song } from "./types"

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export const useSongStore = defineStore("songs", {
  state: () => ({
    songs: [] as Song[],
    activeSongId: null as string | null,
  }),
  getters: {
    getSongById(state): (songId: string) => Song {
      return (songId: string): Song => {
        const song = state.songs.find((song) => song.id === songId)
        if (!song) {
          throw Error(`Song ${songId} not found`)
        }
        return song;
      }
    },
    activeSong(state): Song | null {
      return state.activeSongId ? this.getSongById(state.activeSongId) : null;
    },
  },
  actions: {
    addWord(songId: string, word: string) {
      const song = this.getSongById(songId)
      song.words.push({
        id: crypto.randomUUID(),
        word,
        isHidden: true,
        isTrap: false
      })
    },
    removeWord(songId: string, wordId: string) {
      const song = this.getSongById(songId)
      song.words = song.words.filter(word => word.id === wordId)
    },
    assignTraps(songId: string, maxNumberOfTraps: number = 2) {
      const song = this.getSongById(songId)
      const numberOfTraps = randomIntFromInterval(0, maxNumberOfTraps)
      const indices = Array(song.words.length).fill(0).map((_, index) => index);
      shuffleArray(indices)
      const trapIndices = indices.slice(0, numberOfTraps - 1)
      trapIndices.forEach(index => song.words[index].isTrap = true)
    },
    activateSong(songId: string) {
      this.activeSongId = this.getSongById(songId).id
    },
    addSong(name: string, artist: string) {
      this.songs.push({
        id: crypto.randomUUID(),
        words: [],
        name,
        artist,
      })
    },
    deleteSong(id: string) {
      this.songs = this.songs.filter(song => song.id !== id)
    },
  },
});
