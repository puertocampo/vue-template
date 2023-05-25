import { useApi } from "../apis/index";
import * as T from "../types/index";

export const getWpPosts = async (): Promise<T.IPost[]> => {
  const res = await useApi({
    url: "/wp/v2/posts",
    method: "get",
  });
  return res.data;
};

export const getWpImages = async (): Promise<T.IImage[]> => {
  const res = await useApi({
    url: "/wp/v2/media",
    method: "get",
  });
  return res.data;
};

export const extractImageByName = (images: T.IImage[], imageName: string) => {
  const filteredImages = images.filter(
    (image) => image.slug.indexOf(imageName) >= 0
  );
  return filteredImages;
};
