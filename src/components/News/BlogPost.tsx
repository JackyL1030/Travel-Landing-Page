import { type BlogPost } from "../../utils/contentTypes";

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPost({ post }: BlogPostProps) {
  return <li>BlogPost</li>;
}
