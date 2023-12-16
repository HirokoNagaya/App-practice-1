import React from "react";
import {Box, Button, Grid, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function CreateForm(props) {
  return (
    <form>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <TextField
              label="Title"
              id="title"
              value={props.inputs["title"]}
              onChange={(e) => props.onChange("title", e)}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <TextField
              label="Content"
              id="content"
              multiline
              rows={4} // 任意の行数
              value={props.inputs["content"]}
              onChange={(e) => props.onChange("content", e)}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" mt={5}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              onClick={props.onSubmit}
            >
              Create
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}


export default CreateForm;
