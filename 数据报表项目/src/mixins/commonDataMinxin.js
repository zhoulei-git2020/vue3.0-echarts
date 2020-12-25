export default {
    computed:{
        getliquidfillData(){
           return this.liquidfillData()
        },
        liquidfill_Data(){
            //console.log(typeof(this.getliquidfillData));
          
            return this.getliquidfillData && (this.getliquidfillData.data)/100
        }

    },
    inject:['liquidfillData'],
}