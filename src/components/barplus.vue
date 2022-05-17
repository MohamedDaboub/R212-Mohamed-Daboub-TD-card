<template>
<div class=" lg:flex justify-between   ">
    <h1 class=" text-4xl font-bold text-center mt-8 ">Search properties to rent</h1>
    <div class=" flex justify-between border-2 border-indigo-100 p-3 my-6 bg-white rounded-lg max-w-6xl lg:flex-1 lg:max-w-lg">
      <p class=" text-gray-900 text-base font-medium">Search with Search Bar</p>  
      <plus class=" bg-indigo-100 "></plus>
    </div>
</div>
</template>
<script>
import plus  from './icons/plus.vue'

export default {
    components:{plus,}
}
</script>