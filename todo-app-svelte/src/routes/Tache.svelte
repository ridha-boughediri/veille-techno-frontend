<script>
  import { createEventDispatcher } from "svelte";

  let taches = [];
  let newTask = "";
  let updatingTask = null;
  const dispatch = createEventDispatcher();

  function addTask() {
    if (newTask.trim() !== "") {
      if (updatingTask) {
        // Update the existing task
        taches = taches.map((task) =>
          task.id === updatingTask.id ? { ...task, text: newTask } : task
        );
        updatingTask = null; // Reset updatingTask after updating
      } else {
        // Add a new task
        taches = [...taches, { id: Date.now(), text: newTask }];
      }
      newTask = "";
      dispatch("taskAdded", { taches });
    }
  }

  function removeTask(id) {
    taches = taches.filter((task) => task.id !== id);
    dispatch("taskRemoved", { taches });
  }

  function editTask(id) {
    updatingTask = taches.find((task) => task.id === id);
    newTask = updatingTask.text;
  }
</script>

<main>
  <input bind:value={newTask} placeholder="Add a new task" />
  <button class="bg-lime-600" on:click={addTask}>
    {updatingTask ? "Mettre à jour" : "Ajouter"}
  </button>

  {#if taches.length === 0}
    <p />
  {:else}
    <div>
      {#each taches as { id, text }}
        <div class="grid grid-cols-2 gap-2" key={id}>
          {text}
          <div class="flex space-x-4">
            <button class="gap-3 bg-red-600" on:click={() => removeTask(id)}>
              Supprimer
            </button>
            <button class="bg-blue-600" on:click={() => editTask(id)}>
              Modifier
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</main>
