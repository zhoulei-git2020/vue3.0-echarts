import Loading from './components/Loading/index'
import flybox from './components/FlyBox/index'
import container from './components/Container/index'
export default function(Vue){
    Vue.use(Loading)
    Vue.use(flybox)
    Vue.use(container)
}
