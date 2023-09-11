import { OrderRow } from "../models/OrderRow"
import { StyledH2 } from "./styled/StyledH2"
import { StyledLi } from "./styled/StyledLi"

interface OrderRowsProps {
    row: OrderRow
}

export const OrderList = ({row}:OrderRowsProps) => {
  return (
    <>
    <StyledLi>
        <StyledH2>{row.product}</StyledH2>
        <h3>{row.price}</h3>
    </StyledLi>

    </>
  )
}
