<template>
   <header class="border-indigo-100 border-b-2">
    <div class="flex gap-12">
    <logo></logo>
    <nav class="flex w-full justify-between bg-white/40 p-4 text-gray-900 items-center">
      <div class="flex gap-4 md:w-auto md:items-center">
        <div class="hidden gap-12 xl:flex ">
            <RouterLink to="/Rent" class="text-gray-900 text-base font-medium">Rent</RouterLink>
            <RouterLink to="/Buy" class="text-gray-900 text-base font-medium">Buy</RouterLink>
            <RouterLink to="/Sell" class="text-gray-900 text-base font-medium">Sell</RouterLink>
            <div>
            <RouterLink to="/Manage" class="text-gray-900 text-base font-medium">Manage Property</RouterLink>
            </div>
            <div>
            <RouterLink to="/Resources" class="text-gray-900 text-base font-medium">Resources</RouterLink>
            </div>
        </div>
      </div>
            <div class="hidden text-sm xl:flex">
        <RouterLink class="mx-4 rounded border border-indigo-200 bg-white py-4 px-6 font-semibold leading-none text-indigo-500 hover:border-transparent hover:bg-indigo-900" to="signin">Login</RouterLink>
        <RouterLink class="mx-4 rounded border border-indigo-600 bg-indigo-500 py-4 px-6 font-semibold leading-none text-white  hover:border-transparent hover:bg-zinc-900" to="signup">Sign up</RouterLink>
      </div>
      <Navbar class="sm:flex xl:hidden "/>
    </nav> 
    </div>
  </header>

</template>
<script>
import logo from './icons/Logo.vue'
import Navbar from './icons/Navbar.vue'

export default {
    components:{logo,Navbar}
}
</script> 