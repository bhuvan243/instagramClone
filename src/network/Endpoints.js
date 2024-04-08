const baseUrl = `https://node-auth-jwt-w78c.onrender.com`;

export const Endpoints = {
  login: `${baseUrl}/auth/login`,
  signup: `${baseUrl}/auth/signup`,
};

export const User = {
  userInfo: `${baseUrl}/user/info`,
  suggestions: `${baseUrl}/user/suggestions`,
  follow: `${baseUrl}/user/follow`,
  unfollow: `${baseUrl}/user/unfollow`,
  followers: `${baseUrl}/user/followers`,
  following: `${baseUrl}/user/following`,
};

export const Post = {
  create: `${baseUrl}/post/create`,
  all: `${baseUrl}/post/all`,
  like: `${baseUrl}/post/like`,
  addComment: `${baseUrl}/post/comment`,
  getComments: `${baseUrl}/post/comments`,
};
