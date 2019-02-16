<template>
  <div id="app">
    <h1>Test process</h1>
    <TestItem v-bind:testItem="rootItem"/>
  </div>
</template>

<script>
import TestItem from "./components/TestItem";
import testItems from "./data";

export default {
  name: "app",
  components: {
    TestItem
  },
  data: function() {
    return {
      rootItem: testItems
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 25px;
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

h1,
h2 {
  margin: 0 0 25px;
  font-weight: 400;
  text-align: center;
}

p {
  margin: 0 0 5px;
}
</style>
