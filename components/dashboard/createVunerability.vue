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
<v-form  ref="form" v-model="valid" lazy-validation>
  <v-text-field
    v-model="form.name"
    :rules="nameRules"
    label="Name"
    required
    light
  ></v-text-field>
  <v-textarea
    v-model="form.description"
    label="Description"
    :rules="descriptionRules"
    required
    light
  ></v-textarea>
  <v-text-field
    v-model="form.occurences"
    :rules="occurenceRules"
    label="Number of Occurences"
    required
    light
  ></v-text-field>
  <v-text-field
    v-model="form.maxCoverage"
    :rules="coverageRules"
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
     vulnerabilities:vulnerabilities,
     valid:true,
     nameRules:[
         v => !!v || 'Name is required',
         v => (v && v.length <= 50) || 'Name must be less than 50 characters'
     ],
      descriptionRules:[
          v => !!v || 'Description is required'
      ],
      occurenceRules:[
          v => !!v || 'Occurence is required'
      ],
      coverageRules:[
          v => !!v || 'Max coverage is required',
          v => (v <= 100) || 'Max coverage must be less than or equal to 100'
      ],
      
    }
},
methods:{
  closeForm(){
    this.$emit('close-add-vulnerability-form')
  },

  addVunerability(){
    if(this.$refs.form.validate()){
         this.form.id= this.vulnerabilities.length + 1
    this.$emit('add-vulnerability',this.form)
     this.$emit('close-add-vulnerability-form') 
     this.form={
         name:'',
         description:'',
         occurences:'',
         maxCoverage:'',
         id:''
     }
    }
 
  }
}
}
</script>

<style scoped>
*{
  font-family: 'Sora', sans-serif;
}
</style>