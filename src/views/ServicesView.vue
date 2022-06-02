<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Services</h1>
      <button
        class="button"
        :class="{ active: webDevelopment.isActive }"
        @click="isActiveWebDevelopment() + changeValueWebDevelopment()"
      >
        <h2 class="text">Web Development</h2>
        <h2 class="text">${{ webDevelopment.value.toFixed(2) }}</h2>
      </button>
      <button
        class="button"
        :class="{ active: design.isActive }"
        @click="isActiveDesign() + changeValueDesign()"
      >
        <h2 class="text">Design</h2>
        <h2 class="text">${{ design.value.toFixed(2) }}</h2>
      </button>
      <button
        class="button"
        :class="{ active: integration.isActive }"
        @click="isActiveIntegration() + changeValueIntegration()"
      >
        <h2 class="text">Integration</h2>
        <h2 class="text">${{ integration.value.toFixed(2) }}</h2>
      </button>
      <button
        class="button"
        :class="{ active: training.isActive }"
        @click="isActiveTraining() + changeValueTraining()"
      >
        <h2 class="text">Training</h2>
        <h2 class="text">${{ training.value.toFixed(2) }}</h2>
      </button>
      <div class="result">
        <h2 class="text">Total:</h2>
        <h2 class="text">${{ count.toFixed(2) }}</h2>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../styles/Services.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesView",
  data: () => ({
    count: 0,
    webDevelopment: {
      value: 300,
      isActive: false,
    },
    design: {
      value: 400,
      isActive: false,
    },
    integration: {
      value: 250,
      isActive: false,
    },
    training: {
      value: 220,
      isActive: false,
    },
  }),
  methods: {
    isActiveWebDevelopment() {
      this.webDevelopment.isActive = !this.webDevelopment.isActive;
    },
    changeValueWebDevelopment() {
      if (this.webDevelopment.isActive) {
        this.count += this.webDevelopment.value;
      } else {
        this.count -= this.webDevelopment.value;
      }
    },
    isActiveDesign() {
      this.design.isActive = !this.design.isActive;
    },
    changeValueDesign() {
      if (this.design.isActive) {
        this.count += this.design.value;
      } else {
        this.count -= this.design.value;
      }
    },
    isActiveIntegration() {
      this.integration.isActive = !this.integration.isActive;
    },
    changeValueIntegration() {
      if (this.integration.isActive) {
        this.count += this.integration.value;
      } else {
        this.count -= this.integration.value;
      }
    },
    isActiveTraining() {
      this.training.isActive = !this.training.isActive;
    },
    changeValueTraining() {
      if (this.training.isActive) {
        this.count += this.training.value;
      } else {
        this.count -= this.training.value;
      }
    },
  },
});
</script>
