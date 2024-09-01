import { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import MainContainer from "./components/main";
import axios from "axios";

const BASE_URL = "https://66ced76a901aab24841fcad5.mockapi.io/";

function App() {
  async function getAllPosts() {
    try {
      const allPosts = await axios.get(`${BASE_URL}/tasks`);
      return allPosts;
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePost(id) {
    try {
      const data = await axios.delete(`${BASE_URL}/tasks/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function createPost(newPost) {
    try {
      const data = await axios.post(`${BASE_URL}/tasks`, newPost);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function updatePost(id) {
    try {
      const data = await axios.put(`${BASE_URL}/tasks/${id}`, {
        completed: false,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
