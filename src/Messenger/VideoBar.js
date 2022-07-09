import React, { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { Assignment, CenterFocusStrong, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Navig from '../Components/Navig';
import imgvideo from "../Data/imgvideo.png";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '1050px',
    margin: '35px 0',
    padding: 0,
    paddingLeft: 350,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
}));

const VideoBar = () =>{
  const classes = useStyles();
  const [peerId, setPeerId] = useState('');
  const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);
  const peerInstance = useRef(null);

  useEffect(() => {
    const peer = new Peer();

    peer.on('open', (id) => {
      setPeerId(id)
    });

    peer.on('call', (call) => {
      var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      getUserMedia({ video: true, audio: true }, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream)
        call.on('stream', function(remoteStream) {
          remoteVideoRef.current.srcObject = remoteStream
          remoteVideoRef.current.play();
        });
      });
    })

    peerInstance.current = peer;
  }, [])

  const call = (remotePeerId) => {
    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    getUserMedia({ video: true, audio: true }, (mediaStream) => {

      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remotePeerId, mediaStream)

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream
        remoteVideoRef.current.play();
      });
    });
  }

   const leaveCall = () => {
    currentUserVideoRef.current.destroy();
  }

  return (
    <>
    <Navig />
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name"  fullWidth />
              <Typography gutterBottom variant="h8">Current User ID is {peerId}</Typography>
              <br />
              <br />
              <br />
              <img src={imgvideo} />
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call"  value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)} fullWidth />
              {
              <> 
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth className={classes.margin} onClick={leaveCall}>  
                  Hang Up
                </Button>
                  
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth className={classes.margin} onClick={() => call(remotePeerIdValue)} >
                  Call
                </Button>
                </>
              }
                <div>
                <video ref={currentUserVideoRef} />
                </div>
                <div>
                <video ref={remoteVideoRef} />
                </div>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </>
  );
};

export default VideoBar;