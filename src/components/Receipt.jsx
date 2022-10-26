import React, {useState} from 'react'

export default function Reciept (props) {

    const [paid, setPaid] = useState(false)

    return (
        <div className="receiptWrap">
            <button className="togglePaid" onClick={() => {
                    setPaid(!paid)
                    }}>Toggle Paid</button>
            { !paid && (
            <div className="receipt">
                <div className="person">{props.receipt.person}</div>
                <ul className="order">
                    <li>Main: {props.receipt.order.main}</li>
                    <li>Protein: {props.receipt.order.protein}</li>
                    <li>Rice: {props.receipt.order.rice}</li>
                    <li>Sauce: {props.receipt.order.sauce}</li>
                    <li>Toppings: {(props.receipt.order.toppings).join(', ')}</li>
                    <li>Drink: {props.receipt.order.drink}</li>
                    <li>Cost: {props.receipt.order.cost}</li>
                </ul>
                <button className="pay" onClick={() => {
                    setPaid(!paid)
                    }}>Paid</button>
            </div>
            )}
        </div>
    )
}