import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
// import Modal from "./Modal";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        inputLabel: {
            opacity: 0,
            marginBottom: "10px",
            color: "#000"
        },
        labelMrgin: {
            marginBottom: "10px",
            color: "#000"
        },
        devider: {
            margin: "25px 0"
        },
        input: {
            '& input[type=number]': {
                '-moz-appearance': 'textfield'
            },
            '& input[type=number]::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            background: "#f6f6f6",
        }
    }),
);

type ProfileProps = {
    Profile: ProfileProps[];
};

export default function Staff({ }: ProfileProps) {
    const classes = useStyles();
    const [locationstate, setLocationSate] = useState('');
    const [eststate, setEstSate] = useState('');


    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setLocationSate(event.target.value as string);
    };
    const handleEstChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setEstSate(event.target.value as string);
    };

    return (
        <>
            <div className="mb-20" style={{ color: 'black' }}>
                <div className="items-center justify-between pb-5 sm:flex">
                    <div>
                        <span className="pt-10">View your details here</span>
                    </div>
                </div>
                <hr className={classes.devider} />
                <div className={classes.root}>
                    <Grid container spacing={3} className="flex flex-col sm:flex-row">
                        <Grid item className="w-full sm:w-[50%]">
                            <InputLabel className={classes.labelMrgin}>TRADE NAME</InputLabel>
                            <TextField
                                id="outlined-password-input"
                                placeholder="Trade name"
                                type="text"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item className="w-full sm:w-[50%]">
                            <InputLabel className={classes.labelMrgin}>CONTRACTOR REGISTRATION ID</InputLabel>
                            <TextField
                                id="outlined-password-input"
                                placeholder="contractor registration id"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item className="w-full sm:w-[50%]">
                            <InputLabel className={classes.labelMrgin}>FEIN</InputLabel>
                            <TextField
                                id="outlined-password-input"
                                placeholder="FEIN"
                                type="password"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item className="w-full sm:w-[50%]">
                            <InputLabel className={classes.labelMrgin}>WEBSITE</InputLabel>
                            <TextField
                                id="outlined-password-input"
                                placeholder="Website"
                                type="text"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item className="w-full sm:w-[50%]">
                            <InputLabel className={classes.labelMrgin}>INDUSTRY</InputLabel>
                            <TextField
                                id="outlined-password-input"
                                placeholder="industry"
                                type="text"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                    </Grid>
                    <hr className={classes.devider} />
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <InputLabel className={classes.labelMrgin}>BUSINESS LOCATION</InputLabel>
                            <TextField
                                id="outlined-password-input"
                                placeholder="Location"
                                type="text"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel className={classes.inputLabel}>City</InputLabel>
                            <TextField
                                id="outlined-password-input"
                                placeholder="City"
                                type="text"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={locationstate}
                                onChange={handleChange}
                                placeholder="states"
                                fullWidth
                                variant="outlined"
                                displayEmpty
                            >
                                <MenuItem selected value='' disabled>
                                    States
                                </MenuItem>
                                <MenuItem value={"GJ"}>GJ</MenuItem>
                                <MenuItem value={"MH"}>MH</MenuItem>
                                <MenuItem value={"RJ"}>RJ</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="outlined-password-input"
                                placeholder="Pin"
                                type="number"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-password-input"
                                placeholder="phone"
                                type="number"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                    </Grid>
                    <hr className={classes.devider} />
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <InputLabel className={classes.labelMrgin}>ESTABLISHMENT LOCATION</InputLabel>
                            <TextField
                                id="outlined-password-input"
                                placeholder="Location"
                                type="text"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <InputLabel className={classes.inputLabel}>City</InputLabel>
                            <TextField
                                id="outlined-password-input"
                                placeholder="City"
                                type="text"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={eststate}
                                onChange={handleEstChange}
                                placeholder="states"
                                fullWidth
                                variant="outlined"
                                displayEmpty
                            >
                                <MenuItem selected value='' disabled>
                                    States
                                </MenuItem>
                                <MenuItem value={"GJ"}>GJ</MenuItem>
                                <MenuItem value={"MH"}>MH</MenuItem>
                                <MenuItem value={"RJ"}>RJ</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                id="outlined-password-input"
                                placeholder="Pin"
                                type="number"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-password-input"
                                placeholder="Phone"
                                type="number"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{ shrink: false }}
                                className={classes.input}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}
