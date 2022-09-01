<template>
  <div class="t-px-12 t-py-10">
    <div class="t-flex t-justify-between">
      <h1 class="t-text-center t-text-4xl">Top Vulnerabilities</h1>
      <button  class="elevation-0 t-border-2 t-border-black" flat @click="vulnerabilityFormOpen = true">
      <span class="t-text-primary t-capitalize">Add Vulnerability</span></button>
    </div>

    <v-data-table
      :headers="headers"
      :items="vulnerabilities"
      dark
      :items-per-page="10"
      class="elevation-0 t-mt-11"
    >
      <template v-slot:[`item.description`]="{ item }">
        <div class="  t-w-52 t-truncate t-py-5">{{ item.description }}</div>
      </template>
      <template v-slot:[`item.occurences`]="{ item }">
        <div class="">{{ item.occurences.toLocaleString() }}</div>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon @click="openUpdateForm(item)">mdi-pencil</v-icon>
        <v-icon @click="viewVunerability(item)">mdi-eye</v-icon>
      </template>
    </v-data-table>
    <DashboardCreateVunerability
      @close-add-vulnerability-form="vulnerabilityFormOpen = false"
      :open="vulnerabilityFormOpen"
      @add-vulnerability="addVulnerability"
    />
    <DashboardUpdateVulnerability
      @close-update-vulnerability-form="updateFormOpen = false"
      :open="updateFormOpen"
      @update-vulnerability="updateVulnerability"
      :vulnerability="vulnerability"
    />
  </div>
</template>

<script>
import vulnerabilities from "../../vulnurabilities";
export default {
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Description", value: "description", width: "30%" },
        { text: "Number of Occurences", value: "occurences" },
        { text: "Max coverage(%)", value: "maxCoverage" },

        { text: "Actions", value: "actions" },
      ],
      vulnerabilities: [],
      vulnerabilityFormOpen: false,
      updateFormOpen: false,
      vulnerability: {},
    };
  },
  mounted() {
    this.vulnerabilities = vulnerabilities;
  },
  methods: {
    openVulnerabilityForm() {
      this.vulnerabilityFormOpen = true;
    },
    viewVunerability(vulnerability) {
      this.$router.push({
        name: "Dashboard-id",
        params: { id: vulnerability.id },
      });
    },

   addVulnerability(vulnerability) {
      this.vulnerabilities.push(vulnerability);
    },

    updateVulnerability(vulnerability) {
      this.vulnerabilities.splice(
        this.vulnerabilities.findIndex((item) => item.id === vulnerability.id),
        1,
        vulnerability
      );
    },
    openUpdateForm(vulnerability) {
      this.vulnerability = vulnerability;
      this.updateFormOpen = true;
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Sora", sans-serif;
}
</style>
