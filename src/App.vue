<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/services">Services</router-link> |
    <router-link to="/todolist">To Do List</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
@import "./styles/App.scss";
</style>
