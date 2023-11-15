<script>
  export let listName;
  export let items;

  let newItem = "";
  let editingIndex = -1;
  let editItem = "";

  const addItem = () => {
    if (newItem.trim() !== "") {
      items = [...items, newItem.trim()];
      newItem = "";
    }
  };

  const deleteItem = (index) => {
    items.splice(index, 1);
    if (index === editingIndex) {
      cancelEdit();
    }
  };

  const startEdit = (index) => {
    editingIndex = index;
    editItem = items[index];
  };

  const saveEdit = () => {
    if (editItem.trim() !== "") {
      items[editingIndex] = editItem.trim();
      cancelEdit();
    }
  };

  const cancelEdit = () => {
    editingIndex = -1;
    editItem = "";
  };
</script>

<div class="p-4">
  <h2 class="mb-4 text-2xl font-bold">{listName}</h2>
  <ul>
    {#each items as item, index (item)}
      <li
        class="flex items-center justify-between p-2 mb-2 bg-white rounded shadow"
      >
        {#if index !== editingIndex}
          <span>{item}</span>
        {/if}
        <input
          bind:value={editItem}
          if={index === editingIndex}
          on:keyup={(e) => e.key === "Enter" && saveEdit}
          placeholder="Modifier la tâche"
          class="p-2 border rounded-l"
        />
        <div class="bg-slive-300">
          <button
            on:click={() => startEdit(index)}
            class="p-2 mx-2 text-white bg-blue-500 rounded">Modifier</button
          >
          <button
            on:click={() => deleteItem(index)}
            class="p-2 text-white bg-red-500 rounded">Supprimer</button
          >
        </div>
      </li>
    {/each}
    <li class="flex items-center">
      <input
        bind:value={newItem}
        on:keyup={(e) => e.key === "Enter" && addItem}
        placeholder="Rajouter une tache"
        class="p-2 border rounded-l"
      />
      <button on:click={addItem} class="p-2 text-white bg-gray-500 rounded-r"
        >Ajouter</button
      >
    </li>
  </ul>
</div>

<style>
  /* Add your styles here */
</div>
