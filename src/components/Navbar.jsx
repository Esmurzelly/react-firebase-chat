import React from 'react';
import { Toolbar, AppBar, Grid, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const Navbar = () => {
    const user = true;

    return ( 
        <AppBar color={"secondary"} position="static">
            <Toolbar >
              <Grid container justifyContent={'flex-end'}>
                {user ? 
                <Button variant={'outlined'}>LogOut</Button>
                :
                <NavLink to={LOGIN_ROUTE}>
                    <Button variant={'outlined'}>LogIn</Button>
                </NavLink> 
            }
               
              </Grid>
            </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;