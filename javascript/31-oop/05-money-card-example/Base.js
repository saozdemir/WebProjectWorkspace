class Base{
    discount = 20;
    constructor(firstName, lastName, haveDiscount, products){
        this.firstName = firstName;
        this.lastName = lastName;
        this.haveDiscount = haveDiscount;
        this.products = products;
    }

    calculatePrice(){
        let totalPrice = 0;
        if(this.checkProducts(this.products)){
            if(this.haveDiscount){
                this.products.forEach((product) => {
                    totalPrice += (product.price*(100-this.discount)/100);
                });
            } else{
                this.products.forEach((product) => {
                    totalPrice += product.price;
                });
            }

        } else {
            alert("En az 1 ürün almalısınız.")
        }
        return totalPrice;
    }

    checkProducts(products){
        if(products != null && products.length>0){
            return true;
        }
        return false;
    }
}
export {Base};