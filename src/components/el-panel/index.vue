<template>
  <div class="panel">
    <div class="panel__frame">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'el-panel',
    mounted() {
      document.documentElement.classList.add('has-panel')
    },
    unmounted() {
      document.documentElement.classList.remove('has-panel')
    },
  }
</script>

<style>
  .panel {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
    overflow: auto;
  }

  .panel__frame {
    width: 1170px;
    max-width: 100%;
    padding: var(--spacing);
    background-color: var(--color-light);
  }

  html.has-panel {
    height: 100%;
    background-color: var(--color-dark);
  }

  html.has-panel body {
    height: 100%;
  }

  html.has-panel #app {
    height: 100%;
  }
</style>
