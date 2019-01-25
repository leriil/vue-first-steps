<!-- only one root element allowed! -->
<template>
  <div>
    <p>Server Status : {{ status }}</p>
  <another-status></another-status>
  </div>
  
</template>

<script>
  export default {
    data: function() {
      return {
      status: 'Critical'
    }
  }
}
</script>

<style>

</style>
