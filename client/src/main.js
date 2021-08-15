import { createApp } from 'vue'
import moment from 'moment'
// import cors from 'cors';

import App from './App.vue'


// let whitelist = []
const app = createApp(App)
// app.use(cors())
app.use(moment)
// app.use(cors({
//               origin: ['http://localhost:8080',
//               'http://localhost:3000',
//               'http://localhost:3000/socket.io'],
//               optionsSuccessStatus: 200 
// }));
app.mount('#app')
