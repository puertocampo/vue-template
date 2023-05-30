import { useApi } from "../apis/index";
import * as T from "../types/index";

export const getWpArticles = async (): Promise<T.IArticle[]> => {
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

export const filterImagesByName = (
  images: T.IImage[],
  filterImageName: string
) => {
  const filteredImages = images.filter(
    (image) => image.slug.indexOf(filterImageName) >= 0
  );
  return filteredImages;
};
