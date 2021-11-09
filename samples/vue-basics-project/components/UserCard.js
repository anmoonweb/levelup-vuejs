app.component('user-card', {
  template: ` <div class="user-card">
  <div class="avatar">
    <img
      v-bind:src="user.avatar"
      :alt="user.username"
      :class="
        user.gender == 'female' ? 'border-pink-600' : 'border-indigo-300'
      "
    />
  </div>
  <div class="experience" v-if="experince < 1">syagaire</div>
  <div class="experience" v-else-if="experince < 5">junior</div>
  <div class="experience" v-else>senior</div>
  <p class="username">@{{ user.username }}</p>
  <span class="job">{{ user.job }}</span>
  <span class="tags" v-for="tag in user.tags" :key="tag">{{ tag }}</span>

  <button
    :class="following ? 'bg-indigo-400' : 'bg-indigo-500'"
    @click="followUser"
  >
    {{ following ? "following" : "follow" }}
  </button>
</div>`,
  data() {
    return {
      user: {
        firstName: 'Ahmed',
        lastName: 'Mostapha',
        username: '_mostapha70',
        avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
        age: 23,
        job: 'Developer',
        isAdmin: true,
        tags: ['js', 'html', 'css'],
        status: true,
        gender: 'male',
        website: 'http://www.google.com',
      },
      following: false,
    };
  },
  methods: {
    followUser() {
      this.following = !this.following;
    },
  },
});
