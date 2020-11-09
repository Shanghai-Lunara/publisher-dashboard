<template>
  <h1>111111</h1>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    var ws = new WebSocket("ws://172.20.1.30:6969/dashboard")
    console.log(111111)
    ws.onopen = function() {
      console.log(2222222222)
      // ws.send('111111')
    }

    ws.onmessage = function() {
      console.log(333333)
    }

    ws.onclose = function() {
      console.log('close')
    }

    ws.onerror = function() {
      console.log(4444444)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
