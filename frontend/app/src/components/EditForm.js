import React from "react";
import {Box, Button, Grid, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function EditForm(props) {
  return (
      <Box mt={3}>
          <form>
              <Grid container>
                  <Grid item xs={12}>
                      <TextField
                          label="title"
                          value={props.inputs["title"]}
                          autoFocus={true}
                          onChange={(e) => props.onChange("title", e)}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          label="content"
                          value={props.inputs["content"]}
                          fullWidth
                          multiline
                          onChange={(e) => props.onChange("content", e)}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <Box mt={2}>
                          <Button
                              variant="contained"
                              color="primary"
                              endIcon={<SendIcon/>}
                              onClick={(e) => props.onSubmit(props.post.id, props.inputs, e)}
                          >
                              UPDATE
                          </Button>
                      </Box>
                  </Grid>
              </Grid>
          </form>
      </Box>
  );
}

export default EditForm;
