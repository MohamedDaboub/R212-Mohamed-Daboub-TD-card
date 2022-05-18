<template>
    <figure class=" flex flex-col bg-white mx-4">
        <img class=" rounded-t-lg mt-5 w-full  " :src="image" alt="">
        <figcaption class=" flex flex-col px-5 py-7 border-2 border-t-0 relative">
            <div class=" relative flex flex-col bg-white">
                <h3 class="text-2xl text-gray-900 ">{{ nom }}</h3>
                <address class="my-2 not-italic text-gray-500">{{ nom1 }}</address>
                <div class=" -order-1 flex items-center">
                    <div class="text-2xl text-indigo-500">${{prix.toLocaleString("en-US")}}</div>
                    <div class="text text-gray-900" >/months</div>
                </div>
                <hr class="my-2 border-indigo-100 border-t-2"/>
                <div class="flex justify-between text-sm">
                    <div><bed class=" inline-block align-top"/>{{ nbrSDB }}  Beds</div>
                    <div><bathrooms class=" inline-block align-top"/>{{ nbrSDB1 }}  Bathrooms</div>
                    <div><size class=" inline-block align-top" /> {{size}}</div>
                </div>
                <div class="w-12 grid place-items-center absolute top-7 right-5 h-12 border-2 border-indigo-100 rounded-full">
                    <heart :class="{ 'fill-indigo-700': favori }" />
                </div>
            </div>
        </figcaption>
    </figure>
</template>
<script>
import bed from './icons/Bed.vue'
import Bathrooms from './icons/Bathrooms.vue'
import size from './icons/Size10.vue'
import Heart from './icons/Heart.vue'
export default {
    props:{
        favoris:Boolean,
        nom: String,
        nom1: String,
        prix: Number,
        favori: Boolean,
        image: String, 
        nbrSDB: Number,
        nbrSDB1: Number,
        size:String
        
    },
       
    
    components:{bed,Bathrooms,Heart, size}
}
</script>