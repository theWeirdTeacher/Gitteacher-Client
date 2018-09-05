import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    flex: {
        flexGrow: 1
    }
});

function InputWithIcon(props) {
    const { classes } = props;

    return (
        <form style={{ width: '290px', margin: 'auto' }}>
            <TextField
                className={classes.margin}
                id="username"
                label="Username"
                autoComplete="username"
                style={{ width: '280px' }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    ),
                }}
            />
            <br/>
            <TextField
                className={classes.margin}
                id="password"
                label="Password"
                autoComplete="password"
                type={"password"}
                style={{ width: '280px' }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock />
                        </InputAdornment>
                    ),
                }}
            />
          <Button variant="contained" color="primary">Sign In</Button>
        </form>
    );
}

InputWithIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputWithIcon);