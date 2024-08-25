import { For, createSignal, createMemo } from "solid-js";

function TodoApp(props: any) {
  const [list, setList] = createSignal(["hello", "world"]);

  const [newItemName, setNewItemName] = createSignal("");

  function addItem() {
    if (!newItemName()) {
      return;
    }
    setList([...list(), newItemName()]);
  }

  function deleteItem(idx: number) {
    setList(list().filter((x, i) => i !== idx));
  }

  return (
    <>
      <div class="div-7f37066e">
        <span>TO-DO list:</span>
        <div class="div-7f37066e-2">
          <input
            class="input-7f37066e"
            placeholder="Add a new item"
            value={newItemName()}
            onInput={(event) => setNewItemName(event.target.value)}
          />
          <button class="button-7f37066e" onClick={(event) => addItem()}>
            Add
          </button>
        </div>
        <div class="div-7f37066e-3">
          <ul class="ul-7f37066e">
            <For each={list()}>
              {(item, _index) => {
                const idx = _index();
                return (
                  <li class="li-7f37066e" key={idx}>
                    <span>{item}</span>
                    <button
                      class="button-7f37066e-2"
                      onClick={(event) => {
                        deleteItem(idx);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              }}
            </For>
          </ul>
        </div>
      </div>
      <style>{`.div-7f37066e {
  padding: 10px;
  max-width: 700px;
}.div-7f37066e-2 {
  display: flex;
  width: 100%;
  gap: 16px;
  align-items: stretch;
}.input-7f37066e {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  flex-grow: 1;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}.button-7f37066e {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  font-weight: 700;
  color: #ffffff;
  background-color: #3B82F6;
  cursor: pointer;
}.div-7f37066e-3 {
  margin-top: 1rem;
}.ul-7f37066e {
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: unset;
  padding: unset;
}.li-7f37066e {
  display: flex;
  padding: 0.625rem;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #E5E7EB;
  gap: 16px;
}.button-7f37066e-2 {
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: #ffffff;
  background-color: #EF4444;
}`}</style>
    </>
  );
}

export default TodoApp;
