import React from 'react'

import { Button, TableCell } from '@material-ui/core'
import { ButtonCellProp } from '../types'

const ButtonCell = ({ addCountryToCart, added }: ButtonCellProp) => {
  return (
    <TableCell>
      {added ? (
        <Button variant="contained" disabled>
          ADD
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={addCountryToCart}>
          ADD
        </Button>
      )}
    </TableCell>
  )
}

export default ButtonCell
