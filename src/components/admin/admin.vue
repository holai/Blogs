<template>
	<div class="admin-body">
		<navAdmin></navAdmin>
		<router-view/>
	</div>
</template>

<script>
	import navAdmin from './nav.vue'
	export default {
	  name: 'admin',
	  data () {
	    return {
			isCollapse: true,
	    }
	  },
	  methods: {
		  mover(){
			this.isCollapse=false;
		  },
      },components:{
		  navAdmin
	  },
	  created(){
		  this.$axios.get("/login")
				.then(res=>{
					if(res.data.code!=0){
							location.href="/#/login"
					}
				})
				.catch(error=>{
					location.href="/#/login"
				})
		  },
	}
</script>

<style>
  .admin-body{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    display: -ms-flexbox;
  }

</style>
