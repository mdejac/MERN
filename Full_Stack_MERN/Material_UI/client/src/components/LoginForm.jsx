import React from 'react'
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core'

const styles = {
    paper: {
        width: "20rem",
        padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}


const LoginForm = () => {
    return (
        <Paper elevation={3} style={styles.paper}>
            <h2>Registration Form</h2>
            <form>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput type="text"/>
                </FormControl>

                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>E-mail</InputLabel>
                    <OutlinedInput type="email"/>
                </FormControl>

                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>

                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>

                <Button type="submit" variant="contained" color="primary">Register</Button>
            </form>
        </Paper>
    
    )
}

export default LoginForm