<template>
	<footer class="footer">
		@lu  &nbsp;&nbsp; 本站使用 vue + Element + java
		<p> <img src="" alt=""> </p>
    <div>
      <a href="http://www.beian.miit.gov.cn/">
        <img src="../../assets/gongxinbu.png" />
        豫ICP备20024076
      </a>
    </div>
	</footer>
</template>
<script>
</script>

<style scoped="scoped">
	.footer{
    font-size: .26rem ;
		clear: both;
		text-align: center;
		color: #CFD8DC;
    margin-top: .2rem;
/*    position: absolute;
    bottom: 0;
    width: 100%; */
	}
  div{
    margin: 5px;
  }
  div a{
    display: flex;
    align-items: center;
    /* padding: 5px; */
    justify-content: center;
  }
  img{
    width: 20px;
    margin-right: 10px;
  }
</style>
