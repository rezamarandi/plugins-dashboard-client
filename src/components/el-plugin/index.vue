<template>
  <div class="plugin">
    <div class="plugin__copy">
      <h3>Plugin name</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit enim dolores maiores vel quisquam incidunt.</p>
    </div>
    <div class="plugin__action">
      <el-checkbox />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'el-plugin',
  }
</script>

<style>
  .plugin {
    display: flex;
    padding: 17px 20px;
    border: 2px solid var(--color-light-gray);
    border-radius: 8px;
    background-color: var(--color-light);
  }

  .plugin__copy {
    flex-grow: 1;
  }

  .plugin__copy > *:first-child {
    margin-top: 0;
  }

  .plugin__copy > *:last-child {
    margin-bottom: 0;
  }

  .plugin__copy h3 {
    font-size: 16px;
    list-style: 20px;
    font-weight: var(--font-weight-regular);
    margin: 0;
  }

  .plugin__copy p {
    font-size: 12px;
    list-style: 20px;
    margin-top: 24px;
    color: var(--color-gray);
  }
</style>
