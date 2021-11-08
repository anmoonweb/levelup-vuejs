app.component('user-card', {
  template: `<div class="
    w-60
    mx-auto
    text-center
    rounded-lg
    py-4
    border border-gray-300
  ">
    <div class="relative inline">
        <img v-bind:src="user.avatar" alt=""
            class="w-24 h-24 mx-auto border-4 rounded-full mb-3" :class="user.gender == 'female'? 'border-pink-600': 'border-indigo-300'"/>
    </div>
    <div class="text-green-600" v-if="experince<1">syagaire</div>
    <div class="text-gray-600" v-else-if="experince<5">junior</div>
    <div class="text-gray-600" v-else>senior</div>
    <p class="text-gray-700 font-semibold cursor-pointer hover:underline">
        @{{user.username}}
    </p>
    <span class="text-sm mr-2 bg-gray-200 p-1 rounded-md" v-for="tag in user.tags">{{tag}}</span>

    <span class="block text-gray-500 text-xs mt-1">{{user.job}}</span>
    <button class="mt-3
        px-4
        py-1
        rounded
        text-white" :class="following?
        'bg-indigo-300':
        'bg-indigo-600'" @click="followUser">
        {{following? 'following': 'follow'}}
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
