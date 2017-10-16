export default {
  methods: {
    doFilter (options, value) {
      let arr = []
      for (const opt of options) {
        if (opt.toLowerCase().includes(value.toLowerCase().trim())) {
          arr.push(opt)
        }
      }
      return arr
    }
  }
}
