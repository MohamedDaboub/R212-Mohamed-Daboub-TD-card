<template>
   <header>
    <div class="flex">
    <logo></logo>
    <nav class="flex w-full justify-between bg-white/40 p-4 text-gray-900 items-center">
      <div class="flex gap-4 md:w-auto md:items-center">
        <div class="hidden gap-6 xl:flex ">
            <RouterLink to="/AccueilView" class="text-gray-900 text-base font-medium">Rent</RouterLink>
            <RouterLink to="/AboutView" class="text-gray-900 text-base font-medium">Buy</RouterLink>
            <RouterLink to="/Buy" class="text-gray-900 text-base font-medium">Sell</RouterLink>
            <div>
            <RouterLink to="/Buy" class="text-gray-900 text-base font-medium">Manage Property</RouterLink>
            </div>
            <div>
            <RouterLink to="/Buy" class="text-gray-900 text-base font-medium">Resources</RouterLink>
            </div>
        </div>
      </div>
            <div class="hidden text-sm xl:flex">
        <a class="ml-2 rounded border border-indigo-500 bg-white p-2 font-semibold leading-none text-indigo-500 hover:border-transparent hover:bg-gray-100" href="/auth/signin">Login</a>
        <a class="ml-2 rounded border border-indigo-600 bg-indigo-500 p-2 font-semibold leading-none text-gray-100 hover:border-transparent hover:bg-teal-600" href="/auth/signup">Sign up</a>
      </div>
      <Navbar class="sm:flex xl:hidden "/>
    </nav> 
    </div>
    <hr class="bg-indigo-100 border-indigo-100 border-2"/>
  </header>

</template>
<script>
import logo from './icons/Logo.vue'
import Navbar from './icons/Navbar.vue'

export default {
    components:{logo,Navbar}
}
</script> 