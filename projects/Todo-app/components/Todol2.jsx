import { Button } from "bootstrap";

function Todo2() {
  let todoname="Buy MILK";
  let todoDate="14/7/24";
  return (
    <div class="container tl-row">
      <div class="row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button class="btn btn-primary tl-btn" type="button"  > Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo2;
