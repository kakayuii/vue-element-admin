import { debounce } from '@/utils'

export default {
  mounted() {
    this.__resizeHanlder = debounce(() => {
      this.resize && this.resize()
    }, 100)
    window.addEventListener('resize', this.__resizeHanlder)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.__resizeHanlder)
  }
}
