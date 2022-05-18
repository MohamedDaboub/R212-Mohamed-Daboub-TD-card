<template>
    <div class="flex justify-between bg-white p-2 my-8 rounded-lg  lg:hidden">
        <p class="text-base font-medium mt-4 text-gray-500">Search location</p>
        <searchee class=" bg-indigo-500  "></searchee>
    </div>
    <div class="hidden lg:grid lg:grid-cols-4  bg-white px-8 py-6 rounded-lg   m-4  ">
        <div class=" border-r  ">
            <p class="opacity-50 text-base font-medium text-left text-gray-900">Location</p>
            <p class="text-lg font-bold text-left text-gray-900 ">New York, USA</p>
        </div>
        <div class=" border-r  mx-8">
            <p class="opacity-50 text-base font-medium text-left text-gray-900">When</p>
            <p class="text-lg font-bold text-left text-gray-900 ">Select Move-in Date</p>
        </div>
        <div class=" border-r   mx-4">
            <p class="opacity-50 text-base font-medium text-left text-gray-900">Price</p>
            <p class="text-lg font-bold text-left text-gray-900 ">$500-$2,500</p>
        </div>
        <div class=" flex justify-center ">
            <RouterLink class="  rounded-lg mx-8  border border-indigo-600 bg-indigo-500 py-4 px-6 font-semibold leading-none text-white  hover:border-transparent hover:bg-zinc-900" to="#">Search</RouterLink>
        </div>
    </div>
</template>
<script>
import Searchee  from './icons/Searchbar.vue'

export default {
    components:{Searchee,}
}
</script>
