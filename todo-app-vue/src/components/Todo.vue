<template>
    <div class="p-4">
      <h2 class="mb-4 text-2xl font-bold">{{ listName }}</h2>
      <ul>
        <li v-for="(item, index) in items" :key="index" class="flex items-center justify-between p-2 mb-2 bg-white rounded shadow">
          <span v-if="index !== editingIndex">{{ item }}</span>
          <input v-model="editItem" v-if="index === editingIndex" @keyup.enter="saveEdit" placeholder="Modifier la tâche" class="p-2 border rounded-l" />
          <div class="bg-slive-300 ">
            <button @click="startEdit(index)" class="p-2 mx-2 text-white bg-blue-500 rounded">Modifier</button>
            <button @click="deleteItem(index)" class="p-2 text-white bg-red-500 rounded">Supprimer</button>
          </div>
        </li>
        <li class="flex items-center">
          <input v-model="newItem" @keyup.enter="addItem" placeholder="Rajouter une tache" class="p-2 border rounded-l" />
          <button @click="addItem" class="p-2 text-white bg-gray-500 rounded-r">Ajouter</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      listName: String,
      items: Array,
    },
    data() {
      return {
        newItem: "",
        editingIndex: -1,
        editItem: "",
      };
    },
    methods: {
      addItem() {
        if (this.newItem.trim() !== "") {
          this.items.push(this.newItem.trim());
          this.newItem = "";
        }
      },
      deleteItem(index) {
        this.items.splice(index, 1);
        if (index === this.editingIndex) {
          this.cancelEdit();
        }
      },
      startEdit(index) {
        this.editingIndex = index;
        this.editItem = this.items[index];
      },
      saveEdit() {
        if (this.editItem.trim() !== "") {
          this.items[this.editingIndex] = this.editItem.trim();
          this.cancelEdit();
        }
      },
      cancelEdit() {
        this.editingIndex = -1;
        this.editItem = "";
      },
    },
  };
  </script>
  