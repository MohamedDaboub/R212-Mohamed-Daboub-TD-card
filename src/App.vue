<template>
 <navi ></navi>
<body class=" bg-indigo-25 2xl:px-32">

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

