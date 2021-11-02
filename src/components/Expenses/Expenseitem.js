import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import Card from '../UI/Card';
function Expenseitem(props) {
    //const expenseDate = new Date(2021,2,28);
    //const expenseTitle = 'Car insurance';
    //const expenseAmount = 300;


    return (
        
        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}$</div>
            </div>
        </Card>
    );
}
export default Expenseitem;