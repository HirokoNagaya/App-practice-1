import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
// import DeleteIcon from '@material-ui/icons/Delete';
// import PostModal from "./PostModal";
// import EditForm from "./EditForm";


class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h3" component="h3">
            {this.props.post.title}
          </Typography>
          <Typography variant="body2">
            {this.props.post.content}
          </Typography>
        </CardContent>
        {/* 一時的にコメントアウトします
        <CardActions>
          <Button size="small" variant="contained">DETAIL</Button>
          <Button size="small" variant="contained" color="primary">EDIT</Button>
          <Button size="small" variant="contained" color="secondary" startIcon={<DeleteIcon />}>DELETE</Button>
        </CardActions>
        */}
      </Card>
    );
  }
}
export default PostComponent;
