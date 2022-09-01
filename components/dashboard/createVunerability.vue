<template>
<v-overlay :value="open" >
  <div class="t-bg-white t-w-[500px] t-px-10 t-py-10 t-rounded-container-lg t-h-screen t-overflow-y-scroll">
<div class="t-flex t-justify-between t-items-center ">
          <span class=" t-text-primary t-font-bold t-text-2xl ">Add Vulnerability</span>
          <v-btn light icon>
            <v-icon @click="closeForm" color="#000">mdi-close</v-icon>
          </v-btn>
        </div>

        <div class="mt-6">
<v-form >
  <v-text-field
    v-model="form.name"
    label="Name"
    required
    light
  ></v-text-field>
  <v-text-field
    v-model="form.description"
    label="Description"
    required
    light
  ></v-text-field>
  <v-text-field
    v-model="form.occurences"
    label="Number of Occurences"
    required
    light
  ></v-text-field>
  <v-text-field
    v-model="form.maxCoverage"
    label="Max coverage"
    required
    light
  ></v-text-field>
 
  
  
  <v-btn @click="addVunerability"  color="#AFE614" flat light>
    <span class="t-capitalize t-text-white">Add</span>

  </v-btn>
 
</v-form>
        </div>
  </div>
</v-overlay>

</template>

<script>
 import vulnerabilities from "../../vulnurabilities";
export default {
props:['open'],
data(){
    return{
     form:{
         name:'',
         description:'',
         occurences:'',
         maxCoverage:'',
         id:''
     },
     vulnerabilities:vulnerabilities
    }
},
methods:{
  closeForm(){
    this.$emit('close-add-vulnerability-form')
  },

  addVunerability(){
    this.form.id= this.vulnerabilities.length + 1
    this.$emit('add-vulnerability',this.form)
     this.$emit('close-add-vulnerability-form')
  }
}
}
</script>

<style scoped>
*{
  font-family: 'Sora', sans-serif;
}
</style>