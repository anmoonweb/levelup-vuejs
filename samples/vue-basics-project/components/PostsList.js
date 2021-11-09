app.component('posts-list', {
  template: `<div id="posts" class="posts-list">
  <div v-for="post in posts" :key="post.id" class="post-single">
    <img :src="post.img" :alt="post.title" />
    <div>
      <h3>
        {{ post.title }}
      </h3>
      <p>{{ post.body }}</p>
    </div>
    <div class="actions">
      <div @click="$emit('on-edit', post.id)" class="edit">
        <i class="fa fa-edit"></i>
      </div>
      <div @click="$emit('on-delete', post.id)" class="delete">
        <i class="fa fa-trash"></i>
      </div>
    </div>
  </div>
</div>`,
  props: ['posts'],
});
