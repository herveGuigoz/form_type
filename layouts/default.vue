<template>
  <div class="main">
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Karla', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main {
  background-image: url("../static/bg.svg");
  background-position: bottom;
  background-size: cover;
  height: 100vh;
  width: 100%;
  z-index: -99;
  background-repeat: no-repeat;
  position: fixed;
}
</style>
