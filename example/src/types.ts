export interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}

export type PostRequest = Omit<Post, 'id'>;

export interface Address  {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  }
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface PostComment {
  postId: number,
  id: number,
  name: string;
  email: string;
  body: string;
};
