<template>
  <button v-on:click="$emit('click')" class="button"><slot></slot></button>
</template>

<script>
export default {
  props: {
    click: Function
  }
}
</script>


<style>
.button {
  position: relative;
  display: inline-block;
  padding: 5px 12px;
  text-align: center;
  border: 0;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 4px;
  min-width: 100px;
  transition: all 0.3s ease-out;
}

.button--green {
  background-color: #0f0;
}

.button--green:hover {
  background-color: rgb(0, 210, 0);
}

.button--red {
  background-color: #f00;
}

.button--red:hover {
  background-color: rgb(210, 0, 0);
}
</style>

