<template>
    <header class=" border-b-2 border-indigo-100 bg-white">
        <div class=" flex justify-between m-6 ">
            <div class=" relative flex flex-1 ">
            <logo></logo>
            <p class=" bottom-0 mt-1  text-xl font-bold text-left text-gray-900">Estatery</p>
            </div>
            <navbar></navbar>
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