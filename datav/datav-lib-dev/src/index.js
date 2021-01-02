import Loading from './components/Loading/index'
import flybox from './components/FlyBox/index'
import container from './components/Container/index'
import topHeader from './components/top-header/index'
import headerLogo from './components/top-header/header-logo/index'
import TotalUser from './components/TotalUser/index'
import VueCountTo from './components/VueCountTo/index'
export default function(Vue){
    Vue.use(Loading)
    Vue.use(flybox)
    Vue.use(container)
    Vue.use(topHeader)
    Vue.use(headerLogo)
    Vue.use(TotalUser)
    Vue.use(VueCountTo)
    
}
