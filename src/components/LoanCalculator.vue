<template>
    <div class="d-flex justify-content-center align-items-start flex-column">
        <form>
            <div class="form-group row mb-2">
                <label for="loanAmount" class="col-form-label">Loan Amount</label>
                <div id="loanAmount">
                    <input type="number" class="form-control-sm" placeholder="0" min="0" v-model.number="loanAmount">
                </div>
            </div>
            <div class="form-group row mb-2">
                <label for="loanTerm">Loan Term</label>
                <div id="loanTerm">
                    <input type="number" class="form-control-sm" placeholder="0" min="0" v-model.number="loanTerm">
                </div>
            </div>
            <div class="form-group row mb-2">
                <label for="interestRate">Interest Rate</label>
                <div id="interestRate">
                    <input type="number" class="form-control-sm" placeholder="0" min="0" max="100" v-model.number="interestRate">
                </div>
            </div>
            <div class="form-group mt-2 mb-2">
                <button type="button" class="btn btn-outline-light" v-on:click.prevent="calc">Calculate</button>
            </div>
        </form>
        <label for="finalAmount">Final Amount</label>
        <div id="finalAmount">
            <input type="text" class="form-control-sm" v-bind:value="finalAmount" readonly>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loanAmount: 0,
            loanTerm: 0,
            interestRate: 0,
            finalAmount: 0,
        };
    },
    methods: {
        calc() {
            this.finalAmount = (this.loanAmount * Math.pow(1 + this.interestRate / 100, this.loanTerm)).toFixed(2);
            console.log(this.loanAmount)
            console.log(this.loanTerm)
            console.log(this.interestRate)
        }
    },
    mounted() {
        this.finalAmount = this.finalAmount.toFixed(2);
    }
}
</script>
<script setup>
import { onUnmounted } from 'vue'

onUnmounted(() => {
    alert("You going already? 😟")
})
</script>

<style scoped>
#loanAmount::after,
#finalAmount::after {
    content: " \20AC";
    color: white;
    font-weight: bold;
}

#loanTerm::after {
    content: " years";
    color: white;
    font-weight: bold;
}

#interestRate::after {
    content: "  %";
    color: white;
    font-weight: bold;
}
</style>