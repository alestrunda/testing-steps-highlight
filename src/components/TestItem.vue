<template>
  <div class="test-item" v-bind:class="{ 'test-item--correct': isCorrect, 'test-item--wrong': isWrong }">
    <p class="test-item__num">{{itemNumber}}</p>
    <div class="test-item__description">
      <p class="test-item__title">{{testItem.title}}</p>
      <p v-if="testItem.description" class="test-item__info">{{testItem.description}}</p>
    </div>
    <div class="test-item__btns" v-if="!testItem.items">
      <Button class="button--green" v-on:click="onCorrect">Ok</Button>
      <Button class="button--red" v-on:click="onWrong">Wrong</Button>
    </div>
    <div class="test-item__items" v-else>
      <TestItem
        v-on:onCorrect="onChildCorrect"
        v-on:onWrong="onChildWrong"
        v-on:onReset="onReset"
        v-for="(item, index) in testItem.items"
        v-bind:key="index"
        v-bind:testItem="item"
        v-bind:itemNumber="`${previousNumbers}${index + 1}`"
      />
    </div>
  </div>
</template>

<script>
import Button from './Button';

export default {
  data: function() {
    return {
      isCorrect: false,
      isWrong: false,
      correctChildrenCnt: 0,
      wrongChildrenCnt: 0
    };
  },
  name: 'TestItem',
  components: {
    Button,
  },
  props: {
    testItem: Object,
    itemNumber: String
  },
  computed: {
    previousNumbers: function() {
      return this.itemNumber === undefined ? '' : `${this.itemNumber}.`
    }
  },
  methods: {
    onCorrect: function() {
      if(this.isCorrect) return;
      this.setCorrect();
      this.$emit("onCorrect");
    },
    onReset: function(isCorrect, isWrong) {
      isCorrect && this.correctChildrenCnt--;
      isWrong && this.wrongChildrenCnt--;
      this.setReset();
    },
    onWrong: function() {
      if(this.isWrong) return;
      this.setWrong();
      this.$emit("onWrong");
    },
    onChildCorrect: function() {
      this.correctChildrenCnt++;
      if(this.wrongChildrenCnt > 0)
        this.wrongChildrenCnt--;
      if(this.correctChildrenCnt === this.testItem.items.length) {
        this.onCorrect();
      }
      else {
        this.setReset();
      }
    },
    onChildWrong: function() {
      this.wrongChildrenCnt++;
      if(this.correctChildrenCnt > 0)
        this.correctChildrenCnt--;
      if(this.wrongChildrenCnt === this.testItem.items.length) {
        this.onWrong();
      }
      else {
        this.setReset();
      }
    },
    setCorrect: function() {
      this.isCorrect = true;
      this.isWrong = false;
    },
    setWrong: function() {
      this.isCorrect = false;
      this.isWrong = true;
    },
    setReset: function() {
      this.isCorrect && this.$emit("onReset", this.isCorrect, this.isWrong);
      this.isWrong && this.$emit("onReset", this.isCorrect, this.isWrong);
      this.isCorrect = false;
      this.isWrong = false;
    }
  }
};
</script>

<style>
.test-item {
  display: flex;
  flex-wrap: wrap;
  transition: all 0.3s ease-out;
  border-top: 1px solid #ccc;
  padding-left: 10px;
}

.test-item--correct {
  background-color: rgb(180, 255, 180);
}

.test-item--wrong {
  background-color: rgb(255, 180, 180);
}

.test-item__btns {
  text-align: center;
  padding: 10px 10px 10px 0;
  align-self: center;
}

.test-item__description {
  padding: 20px 10px 15px;
  flex: 1;
}

.test-item__info {
  font-size: 15px;
  color: #888;
  padding-top: 5px;
}

.test-item__items {
  width: 100%;
  padding-left: 20px;
}

.test-item__num {
  padding-top: 20px;
  padding-bottom: 15px;
}
</style>
