<template>
 <div class="t-flex t-justify-center t-items-center t-h-screen">
 
 <button @click="viewVulnerabilities" class="t-bg-primary t-rounded-[7.5px] t-h-14 t-px-8">View Vulnerabilities</button>

 </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods:{
    viewVulnerabilities(){
      this.$router.push('/dashboard');
    }
  }
 
}
</script>
