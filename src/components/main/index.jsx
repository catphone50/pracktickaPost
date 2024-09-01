import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import PostList from "../postList";
import NewPost from "../newPost";
import axios from "axios";
import { BASE_URL } from "../../utils/const";

function MainContainer() {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 3;

  let isMore = page < Math.ceil(totalPosts.length / limit);

  async function getAllPosts() {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      setTotalPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getLimitPosts(page = 1, limit = 3, sortBy = "id") {
    try {
      const response = await axios.get(`${BASE_URL}/posts`, {
        params: {
          page,
          limit,
          sortBy,
          order: "desc",
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePost(id) {
    try {
      const data = await axios.delete(`${BASE_URL}/posts/${id}`);
      getLimitPosts(page);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function updatePost(id, isCompleted) {
    try {
      const data = await axios.put(`${BASE_URL}/posts/${id}`, {
        completed: isCompleted,
      });
      getLimitPosts(page);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function createPost(newPost) {
    try {
      const data = await axios.post(`${BASE_URL}/posts`, newPost);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLimitPosts();
    getAllPosts();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <PostList
        posts={posts}
        deletePost={deletePost}
        updatePost={updatePost}
        setPage={setPage}
        page={page}
        getLimitPosts={getLimitPosts}
        totalPosts={totalPosts.length}
        isMore={isMore}
      />
      <NewPost getLimitPosts={getLimitPosts} createPost={createPost} />
    </div>
  );
}

export default MainContainer;
