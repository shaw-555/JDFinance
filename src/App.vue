<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
import Home from './home/index'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
