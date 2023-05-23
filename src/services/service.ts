import { useApi } from "../apis/index";

export const getWpPosts = () =>
  useApi({
    url: "/wp/v2/posts",
    method: "get",
  });
