export interface IPost {
  id: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

export interface IImage {
  id: string;
  slug: string;
  guid: {
    rendered: string;
  };
}
