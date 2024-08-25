import { LitElement, html, css } from "lit";
import { customElement, property, state, query } from "lit/decorators";

export type Props = {
  getValues?: (input: string) => Promise<any[]>;
  renderChild?: any;
  transformData?: (item) => string;
};

@customElement("auto-complete")
export default class AutoComplete extends LitElement {
  createRenderRoot() {
    return this;
  }

  @property() getValues: any;
  @property() transformData: any;
  @property() renderChild: any;

  @state() showSuggestions = false;
  @state() suggestions = [];
  @state() inputVal = "";

  setInputValue(value: string) {
    this.inputVal = value;
  }
  handleClick(item) {
    this.setInputValue(this.transform(item));
    this.showSuggestions = false;
  }
  fetchVals(city: string) {
    if (this.getValues) {
      return this.getValues(city);
    }
    return fetch(
      `http://universities.hipolabs.com/search?name=${city}&country=united+states`
    ).then((x) => x.json());
  }
  transform(x) {
    return this.transformData ? this.transformData(x) : x.name;
  }

  updated() {
    this.fetchVals(this.inputVal).then((newVals) => {
      if (!newVals?.filter) {
        console.error("Invalid response from getValues:", newVals);
        return;
      }
      this.suggestions = newVals.filter((data) =>
        this.transform(data).toLowerCase().includes(this.inputVal.toLowerCase())
      );
    });
  }

  render() {
    return html`
          <style>.div {
  padding: 10px;
  max-width: 700px;
}
.div-2 {
  position: relative;
  display: flex;
  gap: 16px;
  align-items: stretch;
}
.input {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  border-width: 1px;
  border-color: #000000;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.button {
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: #ffffff;
  background-color: #ef4444;
}
.ul {
  border-radius: 0.25rem;
  height: 10rem;
  margin: unset;
  padding: unset;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.li {
  display: flex;
  padding: 0.5rem;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #e5e7eb;
  cursor: pointer;
}
.li:hover {
  background-color: #f3f4f6;
}
</style>
          <div >
              Autocomplete:

        <div ><input  placeholder="Search for a U.S. university"  .value=${
          this.inputVal
        }  @input=${(event) => (this.inputVal = event.target.value)}  @focus=${(
      event
    ) => (this.showSuggestions = true)}  />
        <button  @click=${(event) => {
          this.inputVal = "";
          this.showSuggestions = false;
        }} >
                  X
                </button></div>
        ${
          this.suggestions.length > 0 && this.showSuggestions
            ? html`<ul >${this.suggestions?.map(
                (item, index) =>
                  html`<li  .key=${idx}  @click=${(event) =>
                    this.handleClick(item)} >${
                    this.renderChild
                      ? html`<props.renderChild  .item=${item} ></props.renderChild>`
                      : html`<span >${this.transform(item)}</span>`
                  }</li>`
              )}</ul>`
            : null
        }</div>
        `;
  }
}
