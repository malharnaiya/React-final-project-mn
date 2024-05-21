import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'REDUCE_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>
                {props.name}
            </td>
            <td> 
                {props.currency} {props.cost}
            </td>
            <td>
                <div className='btnStyle plusBtn' onClick={() => increaseAllocation(props.name)}> <label className='plusLbl'> + </label> </div>
            </td>
            <td>
                <div className='btnStyle reduceBtn' onClick={() => decreaseAllocation(props.name)}> <label className='reducelbl'> - </label> </div>
            </td> 
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;