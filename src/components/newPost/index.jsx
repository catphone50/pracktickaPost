import styles from "./styles.module.css";
import userLogo from "../../assets/icons/user.svg";
import { useForm } from "react-hook-form";

function NewPost({ createPost, getLimitPosts }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    const newPost = {
      ...data,
      compleated: false,
    };
    createPost(newPost);
    getLimitPosts();
    reset();
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.postListTitle}>New posts</h2>
      <div className={styles.newPost}>
        <img className={styles.photoUser} src={userLogo} alt="user" />
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formContainer}>
            <label className={styles.labelTitle}>
              Title
              <input
                {...register("title", { required: true, maxLength: 20 })}
                className={styles.inputTitle}
                placeholder="Title"
              />
              {errors.title && <p>This field is required</p>}
              {errors.title && errors.type === "maxLength" && (
                <p>This should not be more than 20 characters</p>
              )}
            </label>
            <label className={styles.labelText}>
              Text post
              <input
                {...register("text", { required: true })}
                className={styles.inputText}
                placeholder="Text post..."
              />
              {errors.text && <p>This field is required</p>}
            </label>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Publication
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
