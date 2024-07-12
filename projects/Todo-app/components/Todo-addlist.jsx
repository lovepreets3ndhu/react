function Addtolist() {
  return (
    <div class="container text-center">
      <div class="row tl-row">
        <div class="col-6">
          <input type="text" placeholder="Enter your task" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button class="btn btn-primary tl-btn" type="button"  >Add</button>
        </div>
      </div>
    </div>
  );
}

export default Addtolist;
