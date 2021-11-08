app.component('post-form', {
  template: `<form @submit.prevent="addPost"
    class="w-5/12 border border-gray-300 p-4 mt-4 mx-auto items-center justify-center">
    <input placeholder="message" type="text"
        class="w-full border border-gray-500 outline-none rounded-lg px-3 py-1" v-model="post.title" />
    <textarea name="body" v-model="post.body"
        class="w-full border border-gray-500 outline-none px-3 py-1 mt-2 rounded"></textarea>
    <input type="text" v-model="post.img"
        class="w-full text-sm border border-gray-500 outline-none mt-2 rounded px-3 py-1">
    <button type="submit" class="bg-indigo-500 text-gray-200 rounded tent-white px-6 py-1 ml-3 mt-3">
        Send
    </button>
</form>`,
  data() {
    return {
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
});
