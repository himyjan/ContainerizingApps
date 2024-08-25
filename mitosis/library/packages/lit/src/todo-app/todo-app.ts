import { LitElement, html, css } from "lit";
import { customElement, property, state, query } from "lit/decorators";

@customElement("todo-app")
export default class TodoApp extends LitElement {
  createRenderRoot() {
    return this;
  }

  @state() list = ["hello", "world"];
  @state() newItemName = "";

  addItem() {
    if (!this.newItemName) {
      return;
    }
    this.list = [...this.list, this.newItemName];
  }
  deleteItem(idx: number) {
    this.list = this.list.filter((x, i) => i !== idx);
  }

  render() {
    return html`
          <style>.div {
  padding: 10px;
  max-width: 700px;
}
.div-2 {
  display: flex;
  width: 100%;
  gap: 16px;
  align-items: stretch;
}
.input {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  flex-grow: 1;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.button {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  font-weight: 700;
  color: #ffffff;
  background-color: #3b82f6;
  cursor: pointer;
}
.div-3 {
  margin-top: 1rem;
}
.ul {
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: unset;
  padding: unset;
}
.li {
  display: flex;
  padding: 0.625rem;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #e5e7eb;
  gap: 16px;
}
.button-2 {
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: #ffffff;
  background-color: #ef4444;
}
</style>
          <div ><span >TO-DO list:</span>
        <div ><input  placeholder="Add a new item"  .value=${
          this.newItemName
        }  @input=${(event) => (this.newItemName = event.target.value)}  />
        <button  @click=${(event) => this.addItem()} >
                  Add
                </button></div>
        <div ><ul >${this.list?.map(
          (item, index) =>
            html`<li  .key=${idx} ><span >${item}</span>
       <button  @click=${(event) => {
         this.deleteItem(idx);
       }} >
                         Delete
                       </button></li>`
        )}</ul></div></div>
        `;
  }
}
