<template>
  <div class="t-px-12 t-py-10">
<h2>{{vulnerability.name}}</h2>
    <div class="t-mt-6 flex t-justify-between">
      <span>Description</span>
      <p>{{vulnerability.description}}</p>
    </div>


    <div class="t-mt-6">
      <span>Number of Occurences</span>
      <p>{{vulnerability.occurences}}</p>
  </div>

  <div class="t-mt-6">
      <span>Max coverage</span>
      <p>{{vulnerability.maxCoverage}}</p>
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

<style>

</style>