import { Button } from '@material-ui/core';
import { DeleteForever, DeleteForeverOutlined, DeleteForeverRounded, DeleteForeverSharp } from '@material-ui/icons';
import React from 'react';

function ButtonComponent() {
  return (
    <div>
        <Button variant='contained' color='primary' >Primary button</Button>
        <Button color='secondary' variant='contained' >Secondary button</Button>
        <Button color='default' variant='contained' startIcon={<DeleteForeverSharp/>} > Delete button</Button>
    </div>
  )
}

export default ButtonComponent;