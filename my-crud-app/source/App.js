import React from 'react';
import { Layout } from 'antd';
import PostList from './components/PostList';

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content style={{ padding: '24px' }}>
        <h1>Post List</h1>
        <PostList />
      </Content>
    </Layout>
  );
}

export default App;