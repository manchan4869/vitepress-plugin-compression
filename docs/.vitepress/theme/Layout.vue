<script setup>
import DefaultTheme from "vitepress/theme";
import Giscus from "@giscus/vue";
import { useRoute, useData } from "vitepress";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <Giscus
        :key="useRoute().path"
        id="comments"
        repo="manchan4869/vitepress-plugin-compression"
        repoId="R_kgDOI9SMsw"
        category="Announcements"
        categoryId="DIC_kwDOI9SMs84CUNby"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        :lang="useData().lang.value"
        :theme="useData().isDark.value ? 'dark' : 'light'"
        loading="lazy"
        host="https://giscus.app"
      />
    </template>
  </Layout>
</template>
<style>
#comments::part(iframe) {
  margin-top: 20px;
}
</style>
