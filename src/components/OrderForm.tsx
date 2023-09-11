import { StyledInput } from './styled/StyledInput';
import { StyledLable } from './styled/StyledLabel';
import { StyledH2 } from './styled/StyledH2';
import { ChangeEvent, useContext, useState } from 'react';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { ActionType } from '../models/ActionType';
import { OrderContext } from '../context/OrderContext';
import { postOrderData } from '../services/DataService';

export class FormData {
  constructor(public createdBy: string, public paymentMethod: string) {}
}

export const OrderForm = () => {
  const { dispatch, order } = useContext(OrderContext);
  
  // const [formState, setFormState] = useState({
  //   inputValue: '',
  //   paymentValue: '',
  // });

  // console.log(order);
  
  // if(!order.createdBy){
  //   dispatch({
  //     type:ActionType.UPDATE_ORDER,
  //     payload: JSON.stringify({...order, createdBy:''})
  //   })
  // }
  

  // const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value)
  //   dispatch({
  //     type: ActionType.UPDATE_ORDERNAME,
  //     payload:JSON.stringify({ ...order, inputValue: e.target.value }),
  //   });
  //   // order.createdBy='';

  //   console.log(order);
    
  // };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(order);

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledH2>Beställningsformulär</StyledH2>
        <input
          type="text"
          placeholder="Namn"
          value={order.createdBy}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
              type: ActionType.UPDATE_ORDERNAME,
              payload:JSON.stringify({ ...order, createdBy: e.target.value }),
            });
          }}
        ></input>
        <StyledH2>Betalningsalternativ</StyledH2>
        <StyledLable>
          <StyledInput
            type="radio"
            name="Paypal"
            value="Paypal"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: ActionType.UPDATE_ORDERPAYMENT,
                payload: JSON.stringify({ ...order, paymentMethod: e.target.value }),
              });
            }}
          ></StyledInput>
          Paypal
        </StyledLable>
        <StyledLable>
          <StyledInput
            type="radio"
            name="null"
            value="null"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              dispatch({
                type: ActionType.UPDATE_ORDERPAYMENT,
                payload: JSON.stringify({ ...order, paymentMethod: e.target.value }),
              });
            }}
          ></StyledInput>
          Annat
        </StyledLable>
        <StyledButtonPrimary>Köp</StyledButtonPrimary>
      </form>
      
    </>
  );
};
