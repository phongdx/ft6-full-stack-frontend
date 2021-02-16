import { makeStyles, TableCell } from '@material-ui/core'
import React from 'react'

import { FlagProp } from '../types'

const useStyles = makeStyles({
  flag: {
    width: 200,
    height: 100,
    borderRadius: 5,
  },
})

const Flag = ({ flag }: FlagProp) => {
  const classes = useStyles()
  return (
    <TableCell align="center">
      <img className={classes.flag} alt="flag img" src={flag} />
    </TableCell>
  )
}

export default Flag
