<script lang="ts">
export default {
  props: ["btnText"],
  emits: ["emitting-event"],
  // eslint-disable-next-line
  data() {
    return {};
  },

  methods: {
    emitEvent(): void {
      this.$emit("emitting-event");
    },
  },
};
</script>

<template>
  <button @click="emitEvent">{{ btnText }}</button>
</template>

<style scoped>
button {
  margin-right: 8vw;
  margin-left: 8vw;
  font-weight: 600;
  border: none;
  color: white;
  height: 5vh;
  width: 8vw;
  border-radius: 5px;
  font-size: 16px;
  min-width: 23vw;
}

@media (min-width: 768px) {
  button {
    font-size: 24px;
      height: 10vh;
  }
}
</style>
