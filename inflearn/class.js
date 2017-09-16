/** class
 * 데이터(변수)와 로직(함수)
 *
 * 인터페이스와 차이점
 * constructor(생성자) : 클래스 호출될때 실행되는 함수
 * 함수의 구체적인 내용을 꼭 써야함
 */
var Point_c = /** @class */ (function () {
    // public 키워드 때문에 point 클래스 영역에서 y 사용가능
    function Point_c(x, y) {
        if (y === void 0) { y = 0; }
        this.y = y;
        // 클래스의 멤버 x = 매개변수 x
        this.x = x;
    }
    Point_c.prototype.dist = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    // 매개변수 값 안적어주면 0이 들어가게 초기값 셋팅
    Point_c.origin = new Point_c(0, 0);
    return Point_c;
}());
var point_c1 = new Point_c(10, 20);
var point_c2 = new Point_c(25);
/* class를 interface를 이용해 구현하려면

interface Point_i {
    x: number;
    y: number;

    dist(): number;
}

var origin: Point_i = {
    x:0, y:0,
    dist: () => Math.sqrt(this.x * this.x + this.y * this.y)
};

var point_i1: Point_i = {
    x:10, y:20,
    dist: () => Math.sqrt(this.x * this.x + this.y * this.y)
};

var point_i2: Point_i = {
    x:25, y:0,
    dist: () => Math.sqrt(this.x * this.x + this.y * this.y)
};

*/ 
