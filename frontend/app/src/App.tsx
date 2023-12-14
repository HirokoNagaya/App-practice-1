import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

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
  state = {
    posts: []
  };

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
        <h1>My React App!</h1>
        <ul>
          {this.state.posts.map((post: Post) => (
            <li key={post.id}>{post.title}{post.content}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
