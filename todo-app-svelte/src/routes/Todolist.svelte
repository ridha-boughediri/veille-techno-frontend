<script>
  let input = "";
  let todos = [];

  const handleSubmit = () => {
    if (input.trim() !== "") {
      todos = [...todos, { id: Date.now(), text: input, completed: false }];
      input = "";
    }
  };

  const handleDelete = (id) => {
    todos = todos.filter((todo) => todo.id !== id);
  };

  const handleToggle = (id) => {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  };
</script>

<div class="flex flex-col items-center justify-center h-screen">
  <h1 class="text-3xl font-bold">Todo List</h1>
  <div class="flex mb-4">
    <form on:submit={handleSubmit}>
      <input
        placeholder="Rajouter une liste"
        class="p-2 border rounded"
        bind:value={input}
      />
      <button type="submit" class="p-2 ml-2 text-white bg-green-500 rounded">
        Ajouter
      </button>
    </form>
  </div>
</div>

<div class="bg-neutral-200 h-90">
  <ul class="grid h-full grid-cols-3 gap-4 xl:w-96">
    {#each todos as { id, text, completed }}
      <li key={id} class="p-4 bg-red-300 border-2 border-indigo-600 h-96">
        <input
          type="checkbox"
          bind:checked={completed}
          on:change={() => handleToggle(id)}
        />
        <span>{text}</span>
        <button on:click={() => handleDelete(id)}>Delete</button>
      </li>
    {/each}
  </ul>
</div>
