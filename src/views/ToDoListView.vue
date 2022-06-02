<template>
  <section class="section">
    <div class="container__toDoList">
      <h1 class="title__toDoList">To Do List</h1>
      <form class="form">
        <input
          class="input"
          type="text"
          v-model="inputValue"
          placeholder="Add new task..."
          autofocus
          required="required"
        />
        <button
          class="button__toDoList + button__Add"
          @click="add() + isDisclose()"
        >
          <span v-if="editedWork === null">Add</span>
          <span v-else>Update</span>
        </button>
      </form>
      <div class="result" :class="{ hidden: disclose.hidden }">
        <div
          class="output"
          :class="{ completed: work.completed === true }"
          v-for="(work, index) in filtered"
          :key="index"
        >
          <label for="checkbox">
            <input type="checkbox" name="checkbox" v-model="work.completed" />
            {{ firstCharUpper(work.name) }}
          </label>
          <div class="buttonsBox">
            <button class="button__remove" @click="editWork(index)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                style="fill: rgb(0, 0, 0, 1)"
              >
                <path
                  d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"
                ></path>
              </svg>
            </button>
            <button class="button__remove" @click="deleteWork(index)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                style="fill: rgba(255, 0, 0, 1)"
              >
                <path
                  d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="buttonLine">
          <button
            class="button__toDoList"
            :class="{ activeAll: all.isActive }"
            @click="(filter = 'all') + isActiveAll()"
          >
            All
          </button>
          <button
            class="button__toDoList"
            :class="{ activeInProgress: inProgress.isActive }"
            @click="(filter = 'inProgress') + isActiveInProgress()"
          >
            In progress
          </button>
          <button
            class="button__toDoList"
            :class="{ activeCompleted: completed.isActive }"
            @click="(filter = 'completed') + isActiveCompleted()"
          >
            Completed
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../styles/ToDoList.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToDoListView",
  data: () => ({
    inputValue: "",
    id: 0,
    filter: "all",
    editedWork: null,
    works: [] as { id: number; name: string; completed: boolean }[],
    disclose: {
      hidden: false,
    },
    all: {
      isActive: true,
    },
    inProgress: {
      isActive: false,
    },
    completed: {
      isActive: false,
    },
  }),
  computed: {
    filtered() {
      if (this.filter === "all") {
        return this.works;
      } else if (this.filter === "inProgress") {
        return this.works.filter((work) => !work.completed);
      } else if (this.filter === "completed") {
        return this.works.filter((work) => work.completed);
      }
      return this.works;
    },
  },
  methods: {
    firstCharUpper(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    add() {
      if (this.inputValue.length === 0) return;
      if (this.editedWork === null) {
        this.works.push({
          id: (this.id += 1),
          name: this.inputValue,
          completed: false,
        });
      } else {
        this.works[this.editedWork].name = this.inputValue;
        this.editedWork = null;
      }
      this.inputValue = "";
    },
    deleteWork(index: number) {
      this.works.splice(index, 1);
    },
    editWork(index: any) {
      this.inputValue = this.works[index].name;
      this.editedWork = index;
    },
    isDisclose() {
      this.disclose.hidden = true;
    },
    isActiveAll() {
      this.all.isActive = true;
      this.inProgress.isActive = false;
      this.completed.isActive = false;
    },
    isActiveInProgress() {
      this.inProgress.isActive = true;
      this.all.isActive = false;
      this.completed.isActive = false;
    },
    isActiveCompleted() {
      this.completed.isActive = true;
      this.all.isActive = false;
      this.inProgress.isActive = false;
    },
  },
});
</script>
