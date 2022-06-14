<template>
  <div class="main-app">
    <!-- 标题栏 -->
    <header class="main-app-header">
      <h1>QianKun</h1>
    </header>
    <div class="main-app-main">
      <!-- 侧边栏 -->
      <ul class="main-app-side-menu">
        <li @click="push('/vue')">Vue</li>
        <li @click="push('/react')">React</li>
      </ul>
      <!-- 子应用  -->
      <main class="sub-app-container">
        <h4 v-if="loading" class="sub-app-loading">Loading...</h4>
        <div id="sub-app-viewport"></div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    loading: Boolean,
  },
  methods: {
    push(appName) {
      history.pushState(null, appName, appName)
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
}

.main-app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  line-height: 1;
}

.main-app-header h1 {
  color: #333;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 36px;
}

.main-app-main {
  display: flex;
}

.main-app-side-menu {
  width: 130px;
  list-style: none;
  margin-left: 40px;
  padding: 0;
  border-right: 2px solid #aaa;
}

.main-app-side-menu li {
  color: #aaa;
  margin: 20px 0;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
}

.main-app-side-menu li:hover {
  color: #444;
}

.main-app-side-menu li:first-child {
  margin-top: 5px;
}

/* 子应用区域 */
.sub-app-container {
  flex-grow: 1;
  position: relative;
  margin: 0 40px;
}

.sub-app-loading {
  color: #444;
  font-size: 28px;
  font-weight: 600;
  text-align: center;
}
</style>