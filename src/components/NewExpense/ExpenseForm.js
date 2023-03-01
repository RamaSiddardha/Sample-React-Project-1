import "./ExpenseForm.css";

function NewExpenseForm() {

let ChangeEvent = (e) =>{

    console.log(e.target.value)

}

  return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
          <lable>Expense Title</lable>
          <input type="Text" onChange={ChangeEvent}/>
        </div>
        <div className="new-expense__control ">
          <lable>Expense Amount</lable>
          <input type="number" min="0.01"  onChange={ChangeEvent}/>
        </div>
        <div className="new-expense__control ">
          <lable>Date</lable>
          <input type="date"  onChange={ChangeEvent}/>
        </div>
        <div className="new-expense__actions">
          <button tyope="Submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default NewExpenseForm;
