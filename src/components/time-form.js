import { useState } from 'react/cjs/react.development';

function TimeForm({ setTime }) {
  const [input, setInput] = useState(0);
  return (
    <form id="form" className="container">
      <div className="d-flex mt-5 justify-content-center">
        <div className="col-auto">
          <input
            type="text"
            id="time"
            className="form-control"
            placeholder="Time"
            onChange={storeInput}
          />
        </div>
        <div className="col-auto px-2">
          <button className="btn btn-primary" onClick={create}>
            Create
          </button>
        </div>
      </div>
    </form>
  );
  function storeInput(e) {
    setInput(e.target.value);
  }

  function create(e) {
    e.preventDefault();
    setTime(input*60);
  }
}

export default TimeForm;
