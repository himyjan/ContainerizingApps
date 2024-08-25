/** @jsx h */
import { h, Fragment } from "preact";
import { useState } from "preact/hooks";

function TodoApp(props: any) {
  const [list, setList] = useState(() => ["hello", "world"]);

  const [newItemName, setNewItemName] = useState(() => "");

  function addItem() {
    if (!newItemName) {
      return;
    }
    setList([...list, newItemName]);
  }

  function deleteItem(idx: number) {
    setList(list.filter((x, i) => i !== idx));
  }

  return (
    <Fragment>
      <div className="div">
        <span>TO-DO list:</span>
        <div className="div-2">
          <input
            placeholder="Add a new item"
            className="input"
            value={newItemName}
            onChange={(event) => setNewItemName(event.target.value)}
          />
          <button className="button" onClick={(event) => addItem()}>
            Add
          </button>
        </div>
        <div className="div-3">
          <ul className="ul">
            {list?.map((item, idx) => (
              <li className="li" key={idx}>
                <span>{item}</span>
                <button
                  className="button-2"
                  onClick={(event) => {
                    deleteItem(idx);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .div {
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
      `}</style>
    </Fragment>
  );
}

export default TodoApp;