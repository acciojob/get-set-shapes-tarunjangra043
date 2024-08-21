class Rectangle {
            constructor(width, height) {
                this._width = width;
                this._height = height;
            }

            get width() {
                return this._width;
            }

            get height() {
                return this._height;
            }

            getArea() {
                return this._width * this._height;
            }
        }

        class Square extends Rectangle {
            constructor(side) {
                super(side, side);
            }

            getPerimeter() {
                return 4 * this.width;
            }
        }

        const rectangle = new Rectangle(5, 10);
        console.log(rectangle.width);
        console.log(rectangle.height); 
        console.log(rectangle.getArea()); 

        const square = new Square(7);
        console.log(square.width); 
        console.log(square.height); 
        console.log(square.getArea());
        console.log(square.getPerimeter());

        window.Rectangle = Rectangle;
        window.Square = Square;