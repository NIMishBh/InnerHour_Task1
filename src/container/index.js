import React from 'react';
import CustomList from '../components/CustomList';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CheckItems from '../components/CheckItems';
import ItemsInAandB from '../components/ItemsInAandB';
import ItemsCombiningAandB from '../components/ItemsCombiningAandB';
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  buttonStyle: {
    display: "flex",
    padding: theme.spacing(3),
    justifyContent: 'center'
  }
}))

function Container() {

  const classes = useStyles();
  const [ListAItems, ListASetItems] = React.useState(["Orange", "Apple"]);
  const [ListBItems, ListBSetItems] = React.useState(["Apple", "Mango"]);
  const [ComputeState, setComputeState] = React.useState(false)

  const handleClickListA = (item) => {
    ListASetItems(prevItems => {
      return [...prevItems, item];
    });
  };

  const handleClickListB = (item) => {
    ListBSetItems(prevItems => {
      return [...prevItems, item];
    });
  };

  const handleComputeAction = () => {
    setComputeState(true);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <CustomList
            label="List A"
            handleClick={handleClickListA}
            listData={ListAItems}

          />
        </Grid>
        <Grid item xs={6}>
          <CustomList
            label="List B"
            handleClick={handleClickListB}
            listData={ListBItems}

          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.buttonStyle}>
        <Button variant="contained" color="primary" onClick={handleComputeAction}>
          Compute
        </Button>
        </div>
      </Grid>
      {ComputeState === true &&
        <div>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <CheckItems title="Items only in List A" ListAData={ListAItems} ListBData={ListBItems}/>
            </Grid>
            <Grid item xs={3}>
              <CheckItems title="Items only in List B" ListAData={ListBItems} ListBData={ListAItems}/>
            </Grid>
            <Grid item xs={3}>
              <ItemsInAandB ListAData={ListAItems} ListBData={ListBItems} />
            </Grid>
            <Grid item xs={3}>
              <ItemsCombiningAandB ListAData={ListAItems} ListBData={ListBItems} />
            </Grid>
          </Grid>


        </div>
      }
    </div>
  )
}

export default Container
