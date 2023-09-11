<<<<<<< HEAD
import { OrderContext } from "../context/OrderContext";
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary";
import { useContext } from "react";
import { StyledCart } from "./styled/StyledCart";
import { Link } from "react-router-dom";

interface ICartProps {
  toggleCart: () => void;
}

export const Cart = ({ toggleCart }: ICartProps) => {
  const { order } = useContext(OrderContext);
=======
import { OrderContext } from '../context/OrderContext';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { useContext } from 'react';
import { StyledCart } from './styled/StyledCart';
import { OrderRow } from '../models/OrderRow';
import { ActionType } from '../models/ActionType';

export const Cart = () => {
  const { order, dispatch } = useContext(OrderContext);

  const handleClick = (row: OrderRow) => {
    {
      row.amount === 1
        ? dispatch({
            type: ActionType.REMOVED_ORDER_ROW,
            payload: JSON.stringify(row),
          })
        : dispatch({
            type: ActionType.DECREASED_AMOUNT,
            payload: JSON.stringify(row),
          });
    }
  };
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073

  return (
    <StyledCart>
      <p>Din kundvagn:</p>
      <ul>
<<<<<<< HEAD
        {order.orderRows.map((row) => (
          <div key={row.productId}>{row.product}</div>
=======
        {order.orderRows.map((row, index) => (
          <div key={index}>
            {row.product}
            <p>
              antal: {row.amount}, pris: {row.price} kr
            </p>
            <button onClick={() => handleClick(row)}>-</button>
            <button
              onClick={() =>
                dispatch({
                  type: ActionType.INCREASED_AMOUNT,
                  payload: JSON.stringify(row),
                })
              }
            >
              +
            </button>
            <StyledButtonPrimary
              disabled={order.orderRows.length === 0}
              onClick={() =>
                dispatch({
                  type: ActionType.REMOVED_ORDER_ROW,
                  payload: JSON.stringify(row),
                })
              }
            >
              Ta bort
            </StyledButtonPrimary>
          </div>
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
        ))}
        <p>Totalsumma: {order.totalPrice} kr</p>
      </ul>
<<<<<<< HEAD
      <StyledButtonPrimary onClick={toggleCart}>
        <Link to={"/checkout"}>TILL KASSAN</Link>
      </StyledButtonPrimary>
=======
      {order.orderRows.length !== 0 && (
        <StyledButtonPrimary>TILL KASSAN</StyledButtonPrimary>
      )}
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
    </StyledCart>
  );
};
