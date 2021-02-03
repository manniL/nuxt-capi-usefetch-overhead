<template>
  <div class="container">    
  Time:  {{ ttfb }}ms
  </div>
</template>

<script>
  import { defineComponent, useFetch, ref } from '@nuxtjs/composition-api'
  import { useTiming } from '@/composables/useTiming'

  export default defineComponent({
    setup() {
      const t = ref(new Date())
      useFetch(() => {
        console.log('foo')
      })
      
      const { ttfb } = useTiming() 
      
      return { ttfb }
    }
  })
</script>