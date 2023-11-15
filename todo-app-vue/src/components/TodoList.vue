<template>
  <div class="flex flex-col items-center p-4 w-96">
    <h1 class="mb-4 text-3xl font-bold">Todo List</h1>
    <div class="flex mb-4">
      <input
        v-model="newList.name"
        @keyup.enter="addList"
        placeholder="Rajouter une liste"
        class="p-2 border rounded "
      />
      <button @click="addList" class="p-2 ml-2 text-white bg-green-500 rounded">
        Ajouter
      </button>
    </div>

    
    </div>


  <div class="bg-neutral-200">
        <ul class="grid h-full grid-cols-3 gap-4 mt-4 w-60">
          <li
            v-for="(list, index) in lists"
            :key="index"
            class="p-4 bg-green-300 border-2 border-indigo-600 h-96"
          >
            <Todo :listName="list.name" :items="list.items" />


            <div class="flex items-end content-end">


            <button @click="updateItem(index)" class="p-2 mx-2 text-white bg-blue-500 rounded">Modifier</button>
          <button @click="removeList(index)" class="p-2 text-white bg-red-500 rounded">Supprimer</button>
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
