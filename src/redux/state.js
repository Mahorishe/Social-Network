let renderDOM = () => {
  console.log("Test")
};

let state = {
    profilePage: {
      posts: [
        {id: 1, message: "This is good news!", likeCount: 8},
        {id: 2, message: "This is  second good news!", likeCount: 11},
        {id: 3, message: "This is  third good news!", likeCount: 3},
        {id: 4, message: "This is four good news!", likeCount: 56},
        {id: 5, message: "This is  five good news!", likeCount: 25},
      ],
      newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Fred"},
            {id: 2, name: "Jhon"},
            {id: 3, name: "Steve"},
          ],
        messages: [
            {message: "Hello! My Friend"},
            {message: "How are you?"}
          ]
    }
}

export const addPost = () => {
  let newPost = {
    id: 6,
    message: state.profilePage.newPostText,
    likeCount: 10,
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderDOM(state, addPost, updateTextArea);
}

export const updateTextArea = (messagePost) => {
  state.profilePage.newPostText = messagePost;
  renderDOM(state, addPost, updateTextArea);
}

export const subscribe = (observers) => {
  renderDOM = observers;
}

export default state;