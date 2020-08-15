<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
  outline: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: "Nunito", Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-tap-highlight-color: transparent;
  font-weight: 300;
  font-kerning: auto;
  font-optical-sizing: auto;
}

img {
  display: block;
  width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
span,
p,
a,
input {
  font-family: inherit;
}

a {
  text-decoration: none;
}

:root {
  --font-color-1: $color-grey-500;
  --font-color-2: $color-grey-600;
  --font-color-3: $color-grey-700;
}

.copyable-text {
  user-select: text;
  -webkit-user-select: text;
  -moz-user-select: text;
}

::-webkit-scrollbar-track {
  background-color: #dde;
}

::-webkit-scrollbar {
  width: 0.8rem;
  background-color: #f5f5f5;
  border-radius: 0.4rem;
}

::-webkit-scrollbar-thumb {
  background-color: $color-grey-400;
  border-radius: 0.4rem;
}

@include respond(tab-port) {
  ::-webkit-scrollbar-track {
    box-shadow: unset;
    -webkit-box-shadow: unset;
    background-color: unsert;
  }

  ::-webkit-scrollbar {
    width: unset;
    background-color: unset;
  }

  ::-webkit-scrollbar-thumb {
    background-color: unset;
  }
}
</style>