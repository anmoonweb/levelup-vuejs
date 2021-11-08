app.component('posts-list', {
  template: ` <div id="posts" class="lg:w-2/3 px-3 mt-3 lg:mt-0 flex flex-wrap">
  <div v-for="post in posts" :key="post.id" class="lg:w-10/12 rounded border border-gray-200 px-2 py-1 mb-2">
      <div class="flex relative">
          <img :src="post.img" :alt="post.title" class="w-32 rounded shadow mr-2 ">
          <div>
              <h3 class="text-gray-900 text-xl mb-1 font-semibold">{{post.title}}</h3>
              <p class="text-gray-800">{{post.body}} </p>
          </div>
          <div class="actions flex absolute right-1 top-0 space-x-1 pt-1">
              <div @click="$emit('on-edit',post.id)"
                  class="flex items-center justify-center w-6 h-6 text-blue-500 rounded hover:bg-blue-100">
                  <i class="fa fa-edit text-sm"></i>
              </div>
              <div @click="$emit('on-delete',post.id)"
                  class="flex items-center justify-center w-6 h-6 text-red-500 rounded hover:bg-red-100">
                  <i class="fa fa-trash text-sm"></i>
              </div>
          </div>
      </div>
  </div>
</div>`,
  props: ['posts'],
});
