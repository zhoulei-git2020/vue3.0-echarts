export default {
    computed:{
        getliquidfillData(){
           return this.liquidfillData()
        },
        liquidfill_Data(){
            //console.log(typeof(this.getliquidfillData));
          
            return this.getliquidfillData && (this.getliquidfillData.v[1])/100
        }

    },
    inject:['liquidfillData'],
}