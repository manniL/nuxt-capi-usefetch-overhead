<template>
  <div class="container">    
  Time:  {{ ttfb }}ms
  </div>
</template>

<script>

  export default {
  fetch () {
   console.log('foo')
   return {}
  },
  data () {
  return {
    ttfb: -1
    }
  },
  mounted () {
    this.ttfb = globalThis.performance.getEntriesByType('navigation')[0].responseStart
  }
}
</script>