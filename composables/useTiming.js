import { onMounted, ref } from '@nuxtjs/composition-api'

export const useTiming = () => {
    const ttfb = ref(-1)
    
    onMounted(() => {
        ttfb.value = globalThis.performance.getEntriesByType('navigation')[0].responseStart
    })
    
    return {
        ttfb
    }
}