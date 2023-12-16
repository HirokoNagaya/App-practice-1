import React from "react";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import PostModal from "./PostModal";
import EditForm from "./EditForm";


class PostComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      editFormOpen: false,
      editFormInputs: {
        title: "",
        content: ""
      },
      post: null
    };
    this.handleToggleModalOpen = this.handleToggleModalOpen.bind(this);
    this.handleToggleEditFormOpen = this.handleToggleEditFormOpen.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleToggleModalOpen = () => {
    this.setState({ isModalOpen: true });
  }

  handleInputChange(itemName, e) {
    const newInputs = Object.assign({}, this.state.editFormInputs);
    newInputs[itemName] = e.target.value;
    this.setState({
        editFormInputs: newInputs
    });
  }

  handleToggleEditFormOpen() {
    this.setState({
        editFormOpen: !this.state.editFormOpen
    });
}

  render() {
    return (
      <div>
      <Card>
        <CardContent>
          <Typography variant="h3" component="h3">
            {this.props.post.title}
          </Typography>
          <Typography variant="body2">
            {this.props.post.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">DETAIL</Button>
          <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => this.handleToggleEditFormOpen()}
          >EDIT</Button>
          {/* <Button size="small" variant="contained" color="primary">DELETE</Button> */}
          <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => this.props.onDelete(this.props.post.id)
          }>DELETE</Button> 
        </CardActions>
      </Card>
                      <PostModal
                      post={this.props.post}
                      open={this.state.modalOpen}
                      onClose={this.handleToggleModalOpen}
                      onDelete={this.props.onDelete}
                      onEditClick={this.handleToggleEditFormOpen}
                  />
                  {this.state.editFormOpen &&
                  <EditForm
                      post={this.props.post}
                      inputs={this.state.editFormInputs}
                      onChange={this.handleInputChange}
                      onSubmit={this.props.onUpdate}
                  />
                  }
                  </div>
    );
  }
}
export default PostComponent;
