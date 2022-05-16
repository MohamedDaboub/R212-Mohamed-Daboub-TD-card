<template>
<body class=" bg-indigo-50">

  <nav class="flex gap-4">
    <RouterLink to="/AccueilView" class="text-blue-600 text-lg">Accueil</RouterLink>
    <RouterLink to="/AboutView" class="text-blue-600 text-lg">About</RouterLink>
    <RouterLink to="/Buy" class="text-blue-600 text-lg">Buy, Rent and Sell</RouterLink>
  </nav>
 <RouterView/>
</body>
  

</template>
<script>
export default {
  name: "App",
  components: {},
};
</script>
