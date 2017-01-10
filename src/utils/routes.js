import Home from '../components/Home.vue'
import PokeList from '../components/PokeList.vue'
import PokeView from '../components/PokeView.vue'

export const routes = [
    { path: '', component: Home },
    { path: '/pokemons', component: PokeList },
    { path: '/pokemons/:id', component: PokeView }
]