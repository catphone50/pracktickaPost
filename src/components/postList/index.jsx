import styles from "./styles.module.css";
import Post from "../post";

function PostList({
  posts,
  deletePost,
  updatePost,
  setPage,
  page,
  getLimitPosts,
  isMore,
}) {
  function handleClickNext() {
    setPage(page + 1);
    getLimitPosts(page + 1);
    console.log(page, isMore);
  }
  function handleClickPrev() {
    setPage(page - 1);
    getLimitPosts(page - 1);
    console.log(page, isMore);
  }
  return (
    <div className={styles.postListContainer}>
      <h2 className={styles.postListTitle}>List of posts</h2>
      <div className={styles.posts}>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              deletePost={deletePost}
              updatePost={updatePost}
            />
          );
        })}
      </div>
      <div className={styles.buttonContainer}>
        {page > 1 && (
          <button className={styles.postListMorePost} onClick={handleClickPrev}>
            Prev
          </button>
        )}
        {isMore && (
          <button className={styles.postListMorePost} onClick={handleClickNext}>
            More
          </button>
        )}
      </div>
    </div>
  );
}

export default PostList;
