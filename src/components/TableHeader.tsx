import React from 'react'

import { TableCell, TableHead, TableRow, Typography } from '@material-ui/core'

const headerNames = ['Flag', 'Name', 'Languages', 'Population', 'Region', '']

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {headerNames.map((name) => (
          <TableCell align="center" key={name}>
            <Typography>{name}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader
