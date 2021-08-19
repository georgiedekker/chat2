import { createApp } from 'vue'
import moment from 'moment'
// import cors from 'cors';

import App from './App.vue'

const port = 3000
// let whitelist = []
const app = createApp(App)
// app.use(cors({ origin:true }))
app.use(moment)
// app.use(cors({
//               origin: ['http://localhost:8080',
//               'http://localhost:3000',
//               'http://localhost:3000/socket.io', 'https://vue3chatsocketioexpress.herokuapp.com/',
//               'https://611ebaf485726653be7bab67--eloquent-lalande-af32e9.netlify.app',
//               'https://611ebaf485726653be7bab67--eloquent-lalande-af32e9.netlify.app:8080',
//             'https://vue3chatsocketioexpress.herokuapp.com',
//           'https://vue3chatsocketioexpress.herokuapp.com/',
//         'https://vue3chatsocketioexpress.herokuapp.com:3000'],
//               optionsSuccessStatus: 200 
// }));
app.mount('#app')
