import styles from "./styles.module.css";
import userLogo from "../../assets/icons/user.svg";

function Post({ post, deletePost, updatePost }) {
  const handleChange = (e) => {
    updatePost(post.id, e.target.checked);
  };

  const handleClick = () => {
    deletePost(post.id);
  };

  return (
    <div className={styles.post}>
      <div className={styles.postUser}>
        <img className={styles.photoUser} src={userLogo} alt="user" />
        <h5 className={styles.userName}>User logo</h5>
      </div>
      <div className={styles.postTextContainer}>
        <h3>{post.title}</h3>
        <p>{post.text}</p>
      </div>
      <div className={styles.postButtonContainer}>
        <p>ID post: {post.id}</p>
        <button className={styles.deleteBtn} onClick={handleClick}>
          Delete
        </button>
        <label>
          <input
            type="checkbox"
            checked={post.completed}
            onChange={handleChange}
          />
          Read
        </label>
      </div>
    </div>
  );
}

export default Post;
