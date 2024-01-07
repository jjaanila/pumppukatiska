<script setup lang="ts">
import SongRow from "@/components/SongRow"
import {useSongStore} from "@/stores/songs"
defineProps<{
  msg: string;
}>();
const songStore = useSongStore()
</script>

<template>
  <div>
    <song-row :song="activeSong" />
  </div>
</template>

<style scoped>

</style>
