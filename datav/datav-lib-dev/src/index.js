import Loading from './components/Loading/index'
import flybox from './components/FlyBox/index'
import container from './components/Container/index'
import topHeader from './components/top-header/index'
import headerLogo from './components/top-header/header-logo/index'
import TotalUser from './components/TotalUser/index'
import VueCountTo from './components/VueCountTo/index'
import AverageAge from './components/AverageAge/index'
import Echarts from './components/VueEcharts/index';
import TotalDevice from './components/TotalDevice/index'
import TotalGender from './components/TotalGender/index'
import TotalRider from './components/TotalRider/index';
import HotCategory from './components/HotCategory/index';
import CenterHeader from './components/CenterHeader/index';
import TransformCategory from './components/TransformCategory/index'
import BaseScrollList from './components/BaseScrollList/index'
import SalesList from './components/BaseScrollList/index'
import TimeLine from './components/TimeLine/index'
import CustomMap from './components/CustomMap/index'
import RotatingEarth from './components/RotatingEarth/index'
import FightEarth from './components/FightEarth/index'
import OrderMap from './components/OrderMap/index'
import RealTimeOrder from './components/RealTimeOrder/index'
import scheduleView from './components/scheduleView/index'
import salesRank from './components/salesRank/index'
export default function(Vue){
    Vue.use(Loading)
    Vue.use(flybox)
    Vue.use(container)
    Vue.use(topHeader)
    Vue.use(headerLogo)
    Vue.use(TotalUser)
    Vue.use(VueCountTo)
    Vue.use(AverageAge)
    Vue.use(Echarts)
    Vue.use(TotalDevice)
    Vue.use(TotalGender)
    Vue.use(TotalRider)
    Vue.use(HotCategory)
    Vue.use(CenterHeader)
    Vue.use(TransformCategory)
    Vue.use(BaseScrollList)
    Vue.use(SalesList)
    Vue.use(TimeLine)
    Vue.use(CustomMap)
    Vue.use(RotatingEarth)
    Vue.use(FightEarth)
    Vue.use(OrderMap)
    Vue.use(RealTimeOrder)
    Vue.use(scheduleView)
    Vue.use(salesRank)
    
}
