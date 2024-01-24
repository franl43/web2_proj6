<template>
  <h2 class="m-3">Enter account number to see your balance</h2>
  <div class="d-flex justify-content-center align-items-start flex-column mx-4">
    <div v-if="gotAccountNumber" class="input-group mb-3">
      <input type="text" class="form-control" v-model.number="balance" aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default">
      <span class="input-group-text" id="inputGroup-sizing-default">&euro;</span>
    </div>
    <div v-else class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">HR</span>
      <input type="text" class="form-control" v-bind:value="accountNumber" aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default" @keyup.enter="submit">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            balance: 1500,
            accountNumber: "",
        };
    },
    methods: {
      submit() {
        this.accountNumber = true
      }
    },
    computed: {
      gotAccountNumber: function() {
        return this.accountNumber
      }
    }
}
</script>