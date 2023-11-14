<!-- ParentComponent.vue -->
<template>
  <div class="p-4 flex flex-col items-center">
    <h1 class="text-3xl font-bold mb-4">Todo List</h1>
    <div class="mb-4 flex">
      <input
        v-model="newList.name"
        @keyup.enter="addList"
        placeholder="Rajouter une liste"
        class="p-2 border rounded"
      />
      <button @click="addList" class="p-2 ml-2 bg-green-500 text-white rounded">
        Ajouter
      </button>
    </div>

    
    </div>


  <div class="bg-neutral-200">
        <ul class="mt-4 grid grid-cols-3 gap-4">
          <li
            v-for="(list, index) in lists"
            :key="index"
            class="border-2 border-indigo-600 p-4 h-96 bg-green-300"
          >
            <Todo :listName="list.name" :items="list.items" />


            <div class="flex content-end items-end">


            <button @click="updateItem(index)" class="bg-blue-500 text-white p-2 mx-2 rounded">Modifier</button>
          <button @click="removeList(index)" class="bg-red-500 text-white p-2 rounded">Supprimer</button>
            </div>
            

        </li>
          
        </ul>

    </div>

</template>

<script>
import Todo from "@/components/Todo.vue";

export default {
  components: {
    Todo,
  },
  data() {
    return {
      newList: { name: "", items: [] },
      lists: [],
    };
  },
  methods: {
    addList() {
      if (this.newList.name.trim() !== "") {
        this.lists.push({ ...this.newList });
        this.newList = { name: "", items: [] };
      }
    },
    removeList(index) {
      this.lists.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant ParentComponent */
</style>
