import React, {useContext} from 'react';
import { Toolbar, AppBar, Grid, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Context } from '../index';

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);

    return ( 
        <AppBar color={"secondary"} position="static">
            <Toolbar variant={'dense'}>
              <Grid container justifyContent={'flex-end'}>
                {user ? 
                <Button onClick={() => auth.signOut()} variant={'outlined'}>LogOut</Button>
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