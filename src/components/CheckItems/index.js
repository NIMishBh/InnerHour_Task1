import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import useCheckItems from '../../utils/useCheckItems'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  pageContent: {
    padding: theme.spacing(3),
    borderRadius: '10px',
  },
}));

function CheckItems(props) {
  
  const classes = useStyles();

  const {item} = useCheckItems(props.ListAData, props.ListBData)

  return (
    <div>
      <Paper className={classes.pageContent}>
        <List
          subheader={
            <ListSubheader>
              {props.title}
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

export default CheckItems
