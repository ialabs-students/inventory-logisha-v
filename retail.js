var Dress = {
    modelName: "Shirt",
    size: "S",
    count: "24",
    getEngineInfo: function () {
        return "";
    }
};
var men = /** @class */ (function () {
    function men(size, modelName, count) {
        this.category = 'men';
        this.size = size;
        this.modelName = modelName;
        this.count = count;
    }
    men.prototype.getEngineInfo = function () {
        return "dress count: " + this.count;
    };
    return men;
}());
var women = /** @class */ (function () {
    function women(size, modelName, count) {
        this.category = 'women';
        this.size = size;
        this.modelName = modelName;
        this.count = count;
    }
    women.prototype.getEngineInfo = function () {
        return "dress count: " + this.count;
    };
    return women;
}());
var kids = /** @class */ (function () {
    function kids(size, modelName, count) {
        this.category = 'kids';
        this.size = size;
        this.modelName = modelName;
        this.count = count;
    }
    kids.prototype.getEngineInfo = function () {
        return this.count;
    };
    return kids;
}());
var men1 = new men('S-XXL', 'T-shirts', '20');
men1.count = "2";
console.log(men1);
var men2 = new men('S-XXL', 'Jean', '21');
var men3 = new men('S-XXL', 'Sweatshirt', '15');
var women1 = new women('M', 'Saree', '23');
var women2 = new women('S-XXL', 'Kurti', '13');
var women3 = new women('S-XXL', 'Tunics', '19');
var kids1 = new kids('S', 'Sweater', '30');
var kids2 = new kids('S', 'Gowns', '25');
var kids3 = new kids('S', 'Phants', '25');
console.log(men1);
console.log(men2);
console.log(men3);
console.log(women1);
console.log(women2);
console.log(women3);
console.log(kids1);
console.log(kids2);
console.log(kids3);
delete men['count'];
var men4 = [{ category: "men", size: "L", modelName: "Jackets", count: "13" },
    { category: "women", modelNumber: "XL", modelName: "Tops", count: "15" }];
var result = men4.filter(function (obj) {
    return obj.count > '5';
});
console.log(result);
console.log("Clothes dataset");
console.log(men1, men2, women1, women2);
console.log("-----------------------");
console.log("additional");
console.log(men4);
console.log("-----------------------");
console.log("threshold");
console.log(result);
