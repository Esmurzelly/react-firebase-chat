import React, { useContext } from 'react';
import { Button, Container, Grid, Box } from '@mui/material';
import { Context } from '../index';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

const Login = () => {
    const {auth} = useContext(Context);

    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
     .then((result) => {
            const user = result.user;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
          });
      };
    return ( 
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid style={{width: 400, background: 'lightgray'}}
                    container
                        alignItems={'center'}
                        direction={'column'}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'}>LogIn with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default Login;