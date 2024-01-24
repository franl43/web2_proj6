import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import LoanCalculator from './components/LoanCalculator.vue'
import BalanceComponent from './components/BalanceComponent.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('loan-calculator', LoanCalculator)
app.component('balance-component', BalanceComponent)

app.mount('#app')
