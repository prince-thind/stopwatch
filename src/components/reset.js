function Reset({ setTime }) {
  return (
    <div className="text-center mt-4">
      <button onClick={reset} className="btn btn-danger mx-auto">
        Reset
      </button>
    </div>
  );

  function reset() {
    setTime(0);
    
  }
}
export default Reset;
