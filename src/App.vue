<template>
  <div id="app">
    <header-block></header-block>
    <main>
      <router-view/>
    </main>
    <footer-block></footer-block>
  </div>
</template>


<script>
  import HeaderBlock from './components/HeaderBlock.vue'
  import FooterBlock from './components/FooterBlock.vue'

  export default {
    components: {
      HeaderBlock, FooterBlock
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  html, body {
    min-width: 320px;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    height: 100%;
    background: #fff;
    color: #2B3452;
  }

  body {
    position: relative;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  @-ms-viewport {
    width: device-width;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  button {
    outline: none;
    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0;
  }

  sup {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease-in-out;
  }

  picture {
    display: block;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .container {
    max-width: 1392+60px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex-grow: 1;
    padding: 144px 0 164px;
  }

  @keyframes fadeIn {
      0% {
          opacity : 0;
      }
      100% {
          opacity : 1;
      }
  }

  @media (max-width: 575.98px) {
    .container {
      padding-left: 15px;
      padding-right: 15px;
    }

    .section-title {
      font-size: 42px;
    }
  }
</style>
