import { FormControl, InputLabel, MenuItem, TextField, Select, Button, makeStyles} from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    formControl:{
        marginBottom:theme.spacing(3),
        minWidth:120
    }
}))
function MyForm() {
    const classes = useStyles()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({name:'', email:'', gender:''})
    }

    return (
        <form onSubmit={handleSubmit} >
            <TextField
                label='Name'
                variant='outlined'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                fullWidth
                className={classes.formControl}
            />

            <TextField
                label='Email'
                variant='outlined'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                fullWidth
                className={classes.formControl}
            />
            <FormControl variant='outlined' fullWidth className={classes.formControl} >
                <InputLabel>Gender</InputLabel>
                <Select 
                label='Gender'
                name='gender'
                value={formData.gender}
                onChange={handleChange}
                >
                    <MenuItem value='male' >Male</MenuItem>
                    <MenuItem value='female' >Female</MenuItem>
                    <MenuItem value='others' >Others</MenuItem>
                </Select>
            </FormControl>
            <Button variant='contained' color='primary' type='submit' >Submit</Button>


        </form>
    )
}

export default MyForm;