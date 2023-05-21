import axios from "axios";
// connect("http://localhost:4000");

// const apiKey = process.env.APIKEY;
// const baseUrl = process.env.BASEURL;
// const jwtToken = process.env.JWT_TOKEN;
// const userID = process.env.USER_ID;
// const postID = process.env.POST_ID;
// const commentID = process.env.COMMENT_ID;

export const searchUserTagTitle = async (q) => {
  const search = await axios.get(`${baseUrl}/api/v1/post/${postID}`);
  return search.data;
};

export const getExplorePost = async () => {
  const expPost = await axios.get(
    `${baseUrl}/api/v1/explore-post?size=10&page=1`
  );
  return expPost.data.results;
};

export const getLoggedUsers = async () => {
  const loggedUsers = await axios.get(
    `${baseUrl}/api/v1/users-post/${userID}?size=10&page=1`
  );
  return loggedUsers.data.results;
};

export const postWork = async () => {
  const postShareWork = await axios.get(`${baseUrl}/api/v1/create-post`);
  return postShareWork.data.results;
};

export const getMyFollowing = async () => {
  const myFollowing = await axios.get(
    `${baseUrl}/api/v1/my-following?size=10&page=1`
  );

  const response = await fetch(myFollowing, {
    method: "POST",
    headers: { apiKey: `${apiKey}`, Authorization: `Bearer ${jwtToken}` },
    body: JSON.stringify({ email, passoword, token }),
  });
  const data = await response.json;
  const token = data.token;
  const followed = await followedResponse.json();
  return followed.data.results;
};

export const postCreateComment = async () => {
  const createComment = await axios.get(`${baseUrl}/api/v1/create-comment`);

  const response = await fetch(createComment, {
    method: "POST",
    headers: { apiKey: `${apiKey}`, Authorization: `Bearer ${jwtToken}` },
    body: JSON.stringify({ postID, Comment }),
  });
  const data = await response.json;
  const token = data.token;
  const myComment = await followedResponse.json();
  return myComment.data.results;
};

export const authenticateUser = async (email, passoword) => {
  const url = `${baseUrl}//api/v1/login`;

  const response = await fetch(url, {
    method: "POST",
    headers: { apiKey: `${apiKey}` },
    body: JSON.stringify({ email, passoword, token }),
  });
  const data = await response.json;
  const token = data.token;
  const loginData = await loginResponse.json();
  return loginData;
};
