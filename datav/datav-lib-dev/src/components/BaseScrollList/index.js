import BaseScrollList from './BaseScrollList.vue';
import SalesList from './SalesList.vue';

export default function(Vue){
    
    Vue.component(BaseScrollList.name,BaseScrollList)
    Vue.component(SalesList.name,SalesList)
}
