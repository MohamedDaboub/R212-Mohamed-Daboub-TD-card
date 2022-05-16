<template>
    <div class="flex justify-between bg-white p-2 my-8 rounded-lg">
        <p class="text-base font-medium mt-4 text-gray-500">Search location</p>
        <searchee class=" bg-indigo-500  "></searchee>
    </div>
</template>
<script>
import Searchee  from './icons/Searchbar.vue'

export default {
    components:{Searchee,}
}
</script>
