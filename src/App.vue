<template>
<body class=" bg-indigo-50">

  <navi class=" bg-white"></navi>

 <RouterView/>
</body>
  

</template>
<script>
import navi from "../src/components/nav.vue"
export default {
  name: "App",
  components: {navi},
};
</script>

