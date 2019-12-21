<template>
  <div class="w-full flex justify-center">
    <table v-if="data" class="table-fixed w-3/4 mt-10">
      <thead>
        <tr>
          <th class="w-1/3 px-4 py-2">Email</th>
          <th class="w-1/3 px-4 py-2">Question 1</th>
          <th class="w-1/3 px-4 py-2">Question 2</th>
          <th class="w-1/3 px-4 py-2">Question 3</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reponse, index) in data" :key="index">
          <td class="border px-4 py-2">{{ reponse.email }}</td>
          <td class="border px-4 py-2">{{ reponse.Question1 }}</td>
          <td class="border px-4 py-2">{{ reponse.Question2 }}</td>
          <td class="border px-4 py-2">{{ reponse.Question3 }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: null
    }
  },
  mounted () {
    this.$axios.get('https://form-type.firebaseio.com/questionnaire.json')
      .then((response) => {
        this.data = response.data
      })
    
  }
}
</script>