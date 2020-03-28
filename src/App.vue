<template>
  <div id="app">
    <router-view  v-cloak />
  </div>
</template>

<script>
	export default {
	  name: 'App',
		data(){
			return {
        mb:true
			}
		},
    mounted() {
        this.mb=false;
    }
	}
</script>

<style lang="scss">
  @import '@/assets/styles/gl.scss';
	#app{
		width: 100%;
		height: 100%;
    background-color: #FEFEFE;
	}
  [v-clock] { display:none }

</style>
