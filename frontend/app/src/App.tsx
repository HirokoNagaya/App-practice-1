import React from 'react';
import axios from 'axios';
import { Box, Grid } from '@mui/material';
import PostComponent from './components/PostComponent';
import CreateForm from './components/CreateForm';

// Postの型定義
type Post = {
  id: number;
  title: string;
  content: string;
  // 他の必要なプロパティをここに追加
};

// CreateFormInputsの型定義
type CreateFormInputs = {
  title: string;
  content: string;
};

// Stateの型定義
type State = {
  createFormInputs: CreateFormInputs;
  posts: Post[];
};


// Axios インスタンスの作成
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    responseType: 'json'
});

// class App extends React.Component {
class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      createFormInputs: {
        title: '',
        content: ''
      },
      posts: []
    };
  }

  componentDidMount() {
    // 作成したインスタンスを使用
    axiosInstance.get('/posts')
    .then(response => {
        console.log(response.data);
        this.setState({ posts: response.data });
    })
    .catch(() => {
        console.log('通信に失敗しました。');
    });
  }

  render() {
    return (
      <div className="App">
        <Box p={5}>
        <CreateForm
          inputs={this.state.createFormInputs}
          // onChange={this.handleInputChange}
          // onSubmit={this.handlePostSubmit}
                    />
          <Grid container spacing={2}>
          {this.getPosts()}
        </Grid>
        </Box>
      </div>
    );
  }

  getPosts() {
    return this.state.posts.map((post: Post) => (
      <Grid item xs={4} key={post.id}>
        <PostComponent post={post} />
      </Grid>
    ));
  }
}
export default App;
