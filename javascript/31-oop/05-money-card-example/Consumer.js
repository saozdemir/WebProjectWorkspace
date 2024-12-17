import { Base } from "./Base.js";
class Consumer extends Base{
    constructor(firstName, lastName, haveDiscount, products){
        super(firstName, lastName, haveDiscount, products);
    }

    calculatePrice(){
        return super.calculatePrice();
    }
}
export {Consumer};