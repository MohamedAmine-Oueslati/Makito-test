import Character from '../components/Character.vue'
import Details from '../components/Details.vue'

export default [
        {
            path: '/',
            component: Character
        },
        {
            path: '/Details/:id',
            component: Details
        }
    ]