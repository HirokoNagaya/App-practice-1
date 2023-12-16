import React from 'react';
import { styled } from '@mui/system';
import Modal from '@mui/material/Modal';
import {Button, Grid} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}

// const StyledPaper = styled('div')(({ theme }) => ({
//   position: 'absolute',
//   width: '500px',
//   height: '500px',
//   backgroundColor: "#d9ded9",
//   border: '0.5px solid #000',
//   boxShadow: theme.shadows[5],
//   padding: theme.spacing(2, 4, 3),
// }));

function PostModal(props) {
  // const classes = StyledPaper();
  const modalStyle = getModalStyle();

  const body = (
    <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      height: 500,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4, // theme.spacing(4)
      // その他必要なスタイル
    }}
  >
      <div style={modalStyle} 
      // className={classes.paper}
      >
          <h2>{props.post.title}</h2>
          <p>{props.post.content}</p>
          <p>作成日時: {props.post.created_at}</p>
          <p>更新日時: {props.post.updated_at}</p>
          <Grid container>
              <Grid item xs={4}>
                  <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                          props.onEditClick();
                          props.onClose();
                      }}
                  >
                      EDIT
                  </Button>
              </Grid>
              <Grid item xs={4}>
                  <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon/>}
                      onClick={(e) => props.onDelete(props.post.id, e)}
                  >
                      DELETE
                  </Button>
              </Grid>
              <Grid item xs={4}>
                  <Button
                      size="small"
                      variant="contained"
                      onClick={props.onClose}
                  >
                      CLOSE
                  </Button>
              </Grid>
          </Grid>
      </div>
    </Box>
  );

  return (
      <Modal
          open={props.open}
          onClose={props.onClose}
      >
          {body}
      </Modal>
  );
}

export default PostModal;
