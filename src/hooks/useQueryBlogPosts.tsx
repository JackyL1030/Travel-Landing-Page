import { useQuery } from "@tanstack/react-query";
import { getBlogPosts } from "../api/api";
import { type BlogPost } from "../utils/contentTypes";

export default function useQueryBlogPosts() {
  const {
    data: blogPosts,
    error,
    isLoading,
  } = useQuery<BlogPost[], Error>({
    queryKey: ["BlogPosts"],
    queryFn: getBlogPosts,
  });

  return {
    blogPosts,
    error,
    isLoading,
  };
}
