import {
  Show,
  For,
  on,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
import { Dynamic } from "solid-js/web";

export type Props = {
  getValues?: (input: string) => Promise<any[]>;
  renderChild?: any;
  transformData?: (item) => string;
};

function AutoComplete(props: Props) {
  const [showSuggestions, setShowSuggestions] = createSignal(false);

  const [suggestions, setSuggestions] = createSignal([]);

  const [inputVal, setInputVal] = createSignal("");

  function setInputValue(value: string) {
    setInputVal(value);
  }

  function handleClick(item) {
    setInputValue(transform(item));
    setShowSuggestions(false);
  }

  function fetchVals(city: string) {
    if (props.getValues) {
      return props.getValues(city);
    }
    return fetch(
      `http://universities.hipolabs.com/search?name=${city}&country=united+states`
    ).then((x) => x.json());
  }

  function transform(x) {
    return props.transformData ? props.transformData(x) : x.name;
  }

  const onUpdateFn_0_inputVal__ = createMemo(() => inputVal());
  const onUpdateFn_0_props_getValues = createMemo(() => props.getValues);
  function onUpdateFn_0() {
    fetchVals(inputVal()).then((newVals) => {
      if (!newVals?.filter) {
        console.error("Invalid response from getValues:", newVals);
        return;
      }
      setSuggestions(
        newVals.filter((data) =>
          transform(data).toLowerCase().includes(inputVal().toLowerCase())
        )
      );
    });
  }
  createEffect(
    on(
      () => [onUpdateFn_0_inputVal__(), onUpdateFn_0_props_getValues()],
      onUpdateFn_0
    )
  );

  return (
    <>
      <div class="div-57b7450c">
        Autocomplete:
        <div class="div-57b7450c-2">
          <input
            class="input-57b7450c"
            placeholder="Search for a U.S. university"
            value={inputVal()}
            onInput={(event) => setInputVal(event.target.value)}
            onFocus={(event) => setShowSuggestions(true)}
          />
          <button
            class="button-57b7450c"
            onClick={(event) => {
              setInputVal("");
              setShowSuggestions(false);
            }}
          >
            X
          </button>
        </div>
        <Show when={suggestions().length > 0 && showSuggestions()}>
          <ul class="ul-57b7450c">
            <For each={suggestions()}>
              {(item, _index) => {
                const idx = _index();
                return (
                  <li
                    class="li-57b7450c"
                    key={idx}
                    onClick={(event) => handleClick(item)}
                  >
                    <Show
                      fallback={<span>{transform(item)}</span>}
                      when={props.renderChild}
                    >
                      <Dynamic
                        item={item}
                        component={props.renderChild}
                      ></Dynamic>
                    </Show>
                  </li>
                );
              }}
            </For>
          </ul>
        </Show>
      </div>
      <style>{`.div-57b7450c {
  padding: 10px;
  max-width: 700px;
}.div-57b7450c-2 {
  position: relative;
  display: flex;
  gap: 16px;
  align-items: stretch;
}.input-57b7450c {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #000000;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}.button-57b7450c {
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: #ffffff;
  background-color: #EF4444;
}.ul-57b7450c {
  border-radius: 0.25rem;
  height: 10rem;
  margin: unset;
  padding: unset;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}.li-57b7450c {
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #E5E7EB;
  cursor: pointer;
}.li-57b7450c:hover {
  background-color: #F3F4F6;
}`}</style>
    </>
  );
}

export default AutoComplete;
