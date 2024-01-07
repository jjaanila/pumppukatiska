<script setup lang="ts">
defineProps<{
  word: string;
  hidden: boolean;
  trap: boolean;
}>();
</script>

<template>
  <div :class="['song-word-box', hidden && trap && 'trap']">
    <span :class="hidden && 'hidden'">{{ word }}</span>
  </div>
</template>

<style scoped>
.song-word-box {
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw / 6);
  height: 40vh;
}

.hidden {
  display: none;
}

.trap {
  background-color: red;
}
</style>
