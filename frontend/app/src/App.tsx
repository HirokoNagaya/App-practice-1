import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';

// Postの型定義
type Post = {
  id: number;
  title: string;
  content: string;
  // 他の必要なプロパティをここに追加
};

// Stateの型定義
type State = {
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

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
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
          <Grid container spacing={4}>
          {(this.state as State).posts.map((post: Post) => (
            <li key={post.id}>{post.title}{post.content}</li>
          ))}
          </Grid>
        </Box>
      </div>
    );
  }
}

export default App;
