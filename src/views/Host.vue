<script setup lang="ts">
import { ref } from "vue"
import SongRow from "@/components/SongRow.vue"
import { useSongStore } from "@/stores/songs"
const songStore = useSongStore()
const newSongName = ref("")
const newSongArtist = ref("")
</script>

<template>
  <div class="host-container">
    <song-row v-if="songStore.activeSong" :song="songStore.activeSong" />
    <div>
      <input v-model="newSongName" />
      <input v-model="newSongArtist" />
    </div>
    <button @click="songStore.addSong(newSongName, newSongArtist)">Add song</button>
    <ul>
      <li v-for="song in songStore.songs" @click="songStore.activateSong(song.id)">
        {{ song.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.host-container {
  display: flex;
  flex-direction: column;
}
</style>
