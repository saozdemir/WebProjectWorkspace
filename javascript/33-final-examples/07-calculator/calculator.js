class Calculator {

    static isHaveOperator(value) {
        for (let i = 0; i < value.length; i++) {
            if (this.getOperators().has(value[i])) {
                return true;
            }
        }
        return false;
    }

    static isDotHave(value) {
        let result = false;
        if (value.includes(".")) {
            result = true;
        }
        return result;
    }

    static deleteLastChar(value) {
        return value.slice(0, value.length - 1);//! Uzunluğunun 1 eksininden sonrasını sil. 51+68 => 51+6 gibi
    }

    static getOperators() {
        const map = new Map();
        map.set("+", "add");
        map.set("-", "sub");
        map.set("*", "mul");
        map.set("/", "div");
        return map;
    }

}

export {Calculator};