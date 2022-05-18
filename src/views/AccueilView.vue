<template>
  <main>
  
  <div class=" py-6 mx-6">
    <barplus></barplus>
    <Sear></Sear>
  </div>
  <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(345px,1fr))] gap-8">
    <card :nbr-s-d-b="4"
        :nbr-s-d-b1="2"
        :prix="2700"
        :favori="true"
        image="/public/Mask Group.png"
        nom="Beverly Springfield"
        nom1="2821 Lake Sevilla, Palm Harbor, TX"
        size="6x7.5 m²"
    />
    <card :nbr-s-d-b="4"
        :nbr-s-d-b1="2"
        :prix="2095"
        favori
        image="/public/Mask Group6.jpg"
        nom="Palm Harbor"
        nom1="2699 Green Valley, Highland Lake"
        size="6x7.5 m²" />
    <card :nbr-s-d-b="4"
        :nbr-s-d-b1="3"
        :prix="4550"
        favori
        image="/public/Mask Group3.jpg"
        nom="Faulkner Ave"
        nom1="909 Woodland St, Michigan, IN"
        size="6x7 m²" />
    <card :nbr-s-d-b="4"
        :nbr-s-d-b1="2"
        :prix="4650"
        favori
        image="/public/Mask Group4.jpg"
        nom="St. Christal"
        nom1="210 US Highway, HighlandLake, FL"
        size="8x10 m²" />
    <card :nbr-s-d-b="4"
        :nbr-s-d-b1="2"

        :prix="3100"
        favori
        image="/public/Mask Group2.png"
        nom="Cover Red"
        nom1="243 CurlewRoad, PalmHarbor, TX"
        size="6x7.5 m²" />
    <card :nbr-s-d-b="4"
        :nbr-s-d-b1="5"

        :prix="4800"
        favori
        image="/public/Mask Group5.jpg"
        nom="Tarpon Bay"
        nom1="103 Lake Shores, Michigan, IN"
        size="6x7.5 m²" />
  </div>
  <Footer1></Footer1>
  </main>
</template>

<script>
import card from '../components/card.vue'
import navi from '../components/nav.vue'
import Footer1 from '../components/Footer.vue'
import Sear from "../components/Search.vue"
import barplus from "../components/barplus.vue"
export default {
  name: "App",
  components: {card, navi,Footer1,Sear,barplus},
};
</script>