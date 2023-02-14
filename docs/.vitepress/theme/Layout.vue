<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";
import Giscus from "@giscus/vue";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <div class="comments-container">
        <Giscus
          id="comments"
          repo="manchan4869/vitepress-plugin-compression"
          repoId="R_kgDOI9SMsw"
          category="Announcements"
          categoryId="DIC_kwDOI9SMs84CUNby"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light"
          lang="zh-CN"
          loading="lazy"
          host="https://giscus.app"
        />
      </div>
    </template>
  </Layout>
</template>

<style>
/* #comments::part(iframe) {
  max-width: 640px;
  margin: auto;
  display: flex;
}

.comments-container {
  max-height: 640px;
  overflow-y: scroll;
} */
</style>
