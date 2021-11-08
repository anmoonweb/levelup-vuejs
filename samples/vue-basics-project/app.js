// const user = 'Ahmad Rida';

const app = Vue.createApp({
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Post One',
          body: 'amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quaerat?',
          img: 'https://source.unsplash.com/600x300/?nature,water',
        },
        {
          id: 2,
          title: 'Post Two',
          body: 'amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quaerat?',
          img: 'https://source.unsplash.com/600x300/?space,stars',
        },
        {
          id: 3,
          title: 'Post Three',
          body: 'amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, quaerat?',
          img: 'https://source.unsplash.com/600x300/?dev,code',
        },
      ],
      isLogged: true,
      email: 'myemail@gmail.com',
      experience: 4,
      message: 'Hello',
      post: {
        title: '',
        body: '',
        img: 'https://source.unsplash.com/600x300/?',
      },
      action: 'add',
      postIndex: 0,
    };
  },
  methods: {
    addPost() {
      if (this.action == 'add') {
        this.posts.push(this.post);
      } else this.posts[this.postIndex] = this.post;

      this.post = {
        title: '',
        body: '',
        img: 'https://source.unsplash.com/600x300/?',
      };
    },
    removePost(id) {
      this.postIndex = this.posts.findIndex((post) => post.id == id);
      this.posts.splice(this.postIndex, 1);
      console.log(this.posts);
    },
    editPost(id) {
      this.action = 'edit';
      this.postIndex = this.posts.findIndex((post) => post.id == id);
      this.post.title = this.posts[this.postIndex].title;
      this.post.body = this.posts[this.postIndex].body;
      this.post.img = this.posts[this.postIndex].img;
    },
  },
  computed: {
    // isOnline() {
    //   if (this.isLogged && this.user.status) {
    //     return true;
    //   } else return false;
    // },
    // fullName() {
    //   return `${this.user.firstName} ${this.user.lastName}`;
    // },
  },
});
