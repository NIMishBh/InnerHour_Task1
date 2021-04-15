import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  pageContent: {
    padding: theme.spacing(3),
    borderRadius: '10px',
  },
}));

function ItemsInAandB(props) {

  var item = [];
  const classes = useStyles();

  function checkItems(array1, array2) {

    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          item.push(array1[i])
        }
      }
    }
  }

  checkItems(props.ListAData, props.ListBData)

  return (
    <div>
      <Paper className={classes.pageContent}>
        <List
          subheader={
            <ListSubheader>
              Items Present in both A and B
            </ListSubheader>
          }
        >
          {
            item.map((val) => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <DoubleArrowIcon />
                  </ListItemIcon>
                  <ListItemText primary={val} />
                </ListItem>
              )
            })
          }
        </List>
      </Paper>
    </div>
  )
}

export default ItemsInAandB
