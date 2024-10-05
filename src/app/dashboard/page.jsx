"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  // Data fetching function using SWR
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // Fetch posts using SWR
  const { data, mutate, error, isLoading } = useSWR(
    session?.data?.user?.name
      ? `/api/posts?username=${session.data.user.name}`
      : null,
    fetcher
  );

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [session, router]);

  // Handle form submission to add a new post
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value; // Ensure this is a valid URL
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate(); // Revalidate data after submission
      e.target.reset(); // Clear form inputs
    } catch (err) {
      console.error(err);
    }
  };

  // Handle deleting a post
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate(); // Revalidate data after deletion
    } catch (err) {
      console.error(err);
    }
  };

  if (session.status === "loading") {
    return <p>Loading session data...</p>;
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "Loading posts..."
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <img
                      src={post.img || "/default-image.png"}
                      alt={post.title || "Post Image"}
                      style={{ width: '200px', height: '100px' }} // Using a standard <img> tag
                    />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} required />
          <input type="text" placeholder="Desc" className={styles.input} required />
          <input type="text" placeholder="Image URL" className={styles.input} required />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }

  return null;
};

export default Dashboard;
