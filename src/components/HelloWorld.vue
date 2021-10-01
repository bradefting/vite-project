<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true,
  },
});

function add() {
  count.value++;
}

function reset() {
  console.log('reset');
  count.value = 0;
}

let count = ref(0)
</script>

<template lang="pug">
h1 {{ msg }}
p
  | Recommended IDE setup:
  a(href='https://code.visualstudio.com/' target='_blank') VSCode
  |     +
  a(href='https://github.com/johnsoncodehk/volar' target='_blank') Volar
p
  a(href='https://vitejs.dev/guide/features.html' target='_blank')
    | Vite Documentation
  |     |
  a(href='https://v3.vuejs.org/' target='_blank') Vue 3 Documentation
button(type='button' @click='add') count is: {{ count }}
button(type='button' @click='reset') Reset
p
  | Edit
  code components/HelloWorld.vue
  |  to test hot module replacement.
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
