<script>
  import Tache from "./Tache.svelte";

  let allTasks = [];

  function handleTaskAdded(event) {
    allTasks = event.detail.tasks;
  }

  function handleTaskRemoved(event) {
    allTasks = event.detail.tasks;
  }

  function handleUpdate(event) {
    allTasks = event.detail.tasks;
  }

  let input = "";
  let list = [];

  let updatingTask = null; // Keep track of the task being updated

  const handleSubmit = () => {
    if (input.trim() !== "") {
      if (updatingTask) {
        // Update the existing task
        list = list.map((todo) =>
          todo.id === updatingTask.id ? { ...todo, text: input } : todo
        );
        updatingTask = null; // Reset updatingTask after updating
      } else {
        // Add a new task
        list = [...list, { id: Date.now(), text: input, completed: false }];
      }
      input = "";
    }
  };

  const handleDelete = (id) => {
    list = list.filter((todo) => todo.id !== id);
  };

  const handleToggle = (id) => {
    list = list.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };

  const handleEdit = (id) => {
    updatingTask = list.find((todo) => todo.id === id);
    input = updatingTask.text;
  };
</script>

<div class="flex flex-col items-center justify-center h-70">
  <h1 class="text-3xl font-bold">Todo List</h1>
  <div class="flex mb-4">
    <form on:submit={handleSubmit}>
      <input
        placeholder="Rajouter une liste"
        class="p-2 border rounded"
        bind:value={input}
      />
      <button type="submit" class="p-2 ml-2 text-white bg-green-500 rounded">
        {updatingTask ? "Mettre à jour" : "Ajouter"}
      </button>
    </form>
  </div>
</div>

<div class="h-100 bg-neutral-200">
  <ul class="grid grid-cols-3 gap-4 w-30">
    {#each list as { id, text, completed }}
      <li key={id} class="p-4 border-2 border-indigo-600 bg-yellow-612 h-96">
        <div class="grid grid-cols-2 gap-2">
          <h5
            class="text-xl font-bold leading-none text-gray-900 dark:text-white"
          >
            {text}
          </h5>
          <div class="grid grid-cols-3">
            <button
              on:click={() => handleEdit(id)}
              class="p-2 mx-2 text-white bg-yellow-500 rounded"
            >
              Modifier
            </button>
            <button
              on:click={() => handleDelete(id)}
              class="p-2 mx-2 text-white bg-red-500 rounded"
            >
              Supprimer
            </button>
          </div>
        </div>

        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <Tache
                on:taskAdded={handleTaskAdded}
                on:taskRemoved={handleTaskRemoved}
              />
            </li>
          </ul>
        </div>
      </li>
    {/each}
  </ul>
</div>
