import React, { useContext, useState, useEffect } from 'react';
import { Container } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {
    collection,
    addDoc,
    Timestamp,
    getDocs,
    doc,
    query,
    onSnapshot,
    orderBy,
  } from "firebase/firestore";
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Grid } from '@mui/material';

const Chat = () => {
    const {auth, db} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState("");

    const [messagesData, setMessagesData] = useState([]);

    const sendMessage = async () => {
        try {
          const docRef = await addDoc(collection(db, "messages"), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: Timestamp.fromDate(new Date()),
          });
    
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        setValue("");
      };

    const getMessages = async () => {
      const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

      onSnapshot(q, (querySnapshot) => {
        setMessagesData([]);

        querySnapshot.docs.map((doc) => {
          setMessagesData((prevState) => {
            return [...prevState, doc.data()];
          });
        });
      });
    };

    useEffect(() => {
        getMessages();
      }, []);

    return ( 
        <Container>
            <Grid container
                justifyContent={'center'}
                style={{height: window.innerHeight - 50, marginTop: 50}}
            >
                <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflow: 'auto'}}>
                    
                </div>

                <Grid
                        container
                        direction={'column'}
                        alignItems={'flex-end'}
                        style={{width: '80%'}}
                    >
                        <TextField 
                            fullWidth 
                            maxRows={2} 
                            variant={'outlined'} 
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        <Button onClick={sendMessage} variant={'outlined'}>Send</Button>
                    </Grid>
            </Grid>
        </Container>
     );
}
 
export default Chat;