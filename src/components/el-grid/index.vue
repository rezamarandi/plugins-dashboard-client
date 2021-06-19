<template>
  <div class="grid"><slot /></div>
</template>

<script>
export default {
  name: 'el-grid',
  props: ['col']
}
</script>

<style>
  .grid {
    display: grid;
    column-gap: 30px;
    row-gap: 30px;
  }

  @media screen and (min-width: 768px){
    .grid {
      grid-template-columns: 1fr 1fr;
    }    
  }

  @media screen and (min-width: 1200px){
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
    }    
  }
</style>