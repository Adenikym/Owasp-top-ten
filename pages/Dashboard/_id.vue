<template>
  <div class="t-px-12 t-py-10">
<h2 class="t-font-bold t-text-xl t-text-primary">{{vulnerability.name}}</h2>
    <div class="t-mt-6 flex t-justify-between">
      <span class="t-font-bold text-lg">Description</span>
      <p class="t-mt-2 t-w-full sm:t-w-1/2">{{vulnerability.description}}</p>
    </div>


    <div class="t-mt-6">
      <span class="t-font-bold text-lg" >Number of Occurences</span>
      <p class="t-mt-2">{{vulnerability.occurences}}</p>
  </div>

  <div class="t-mt-6">
      <span class="t-font-bold text-lg">Max coverage</span>
      <p class="t-mt-2">{{vulnerability.maxCoverage}}</p>
  </div>


  </div>
</template>

<script>
import vulnerabilities from "../../vulnurabilities";
export default {
  mounted(){
    this.getVulnerabilityDetails(this.$route.params.id);
  },
  data(){
    return{
      vulnerabilities: vulnerabilities,
      vulnerability:{}
    }
  },
  methods:{
    getVulnerabilityDetails(id){
      this.vulnerability = this.vulnerabilities.find(vulnerability => vulnerability.id == id)
    }
  }

}
</script>

<style scoped>
* {
  font-family: "Sora", sans-serif;
}
</style>
