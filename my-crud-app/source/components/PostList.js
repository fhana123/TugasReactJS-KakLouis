import React, { useEffect, useState } from 'react';
import { List, Button, message } from 'antd';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      message.error('Failed to fetch posts.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
      message.success('Post deleted successfully.');
    } catch (error) {
      message.error('Failed to delete post.');
    }
  };

  return (
    <List
      dataSource={posts}
      renderItem={item => (
        <List.Item actions={[
          <Button type="primary" danger onClick={() => handleDelete(item.id)}>Delete</Button>
        ]}>
          {item.title}
        </List.Item>
      )}
    />
  );
};

export default PostList;