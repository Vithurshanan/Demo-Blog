import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

// Handle GET request
export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    // Connect to the database
    await connect();

    // Fetch the post by ID
    const post = await Post.findById(id);

    // If no post is found, return a 404 response
    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    // Return the found post
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.error("Error fetching post:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

// Handle DELETE request
export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    // Connect to the database
    await connect();

    // Delete the post by ID
    const deletedPost = await Post.findByIdAndDelete(id);

    // If no post is found to delete, return a 404 response
    if (!deletedPost) {
      return new NextResponse("Post not found", { status: 404 });
    }

    // Return a success message
    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    console.error("Error deleting post:", err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
