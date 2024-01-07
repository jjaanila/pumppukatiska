<script setup lang="ts">
import { type Song } from "../stores/types"
import SongWordBox from "@/components/SongWordBox.vue";
defineProps<{
  song: Song;
}>();
</script>

<template>
  <div>
    <song-word-box
    v-for="songWord in song.words"
    :key="songWord.id"
    :word="songWord.word" :hidden="songWord.isHidden" :trap="songWord.isTrap" />
  </div>
</template>

<style scoped>

</style>
