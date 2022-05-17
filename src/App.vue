<template>
<body class=" bg-indigo-25 2xl:mx-32">

  <navi ></navi>

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

