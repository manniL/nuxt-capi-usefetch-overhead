<template>
  <div class="container">    
  Time:  {{ ttfb }}ms
  </div>
</template>

<script>
  import { defineComponent, useAsync, ref } from '@nuxtjs/composition-api'
  import { useTiming } from '@/composables/useTiming'
  export default defineComponent({
    setup() {
      const t = useAsync(() => {
        console.log('foo')
      })
      
      const { ttfb } = useTiming() 
      
      return { ttfb }
    }
  })
</script>