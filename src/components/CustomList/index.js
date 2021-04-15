import React from 'react'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  paperStyle: {
    padding: theme.spacing(3),
    borderRadius: '12px',
  },

  textFieldStyle: {
    width: '100%'
  },

  buttonStyle: {
    display: "flex",
    marginTop: theme.spacing(2),
    justifyContent: 'flex-end'
  }
}))


function CustomList(props) {

  const classes = useStyles();

  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {

    if(inputText === "")
    {
      alert("Please enter something")
    }
    else{
      props.handleClick(inputText)
      setInputText("");
      
    }
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paperStyle}>
        <TextField onChange={handleChange} label={props.label} variant="outlined" value={inputText} className={classes.textFieldStyle} />
        <div className={classes.buttonStyle}>
          <Button onClick={addItem} variant="contained" color="primary">
            Add to List
          </Button>
        </div>
        <List>
          {props.listData.map(val => (
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary={val} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  )
}

export default CustomList
