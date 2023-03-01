import ExpenseItem from "./ExpenseItems"
import "./Expense.css"
import Card from "../UI/Card"

function Expense(props){
    return <Card className="expenses">
        {props.expenses.map((expense) => (
        <ExpenseItem
          item={expense.item}
          price={expense.price}
          location={expense.location}
          Date={expense.date}
        />
      ))}
    </Card>
}

export default Expense