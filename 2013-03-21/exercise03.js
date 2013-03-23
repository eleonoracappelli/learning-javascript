function Triangle(e, e1, e2){ //a

	this.e = e;
	this.e1 = e1;
	this.e2 = e2;

}

Triangle.prototype.perimeter = function (){ //b

	return ( this.e.length() + this.e1.length() + this.e2.length() );
}

Triangle.prototype.area = function (){ //c
    
    var p = this.perimeter() / 2
	return Math.sqrt( p*(p - this.e.length()) * (p - this.e1.length()) * (p - this.e2.length()) );
}

var point1 = new Point2D(30, 7);
var point2 = new Point2D(30, 79);
var point3 = new Point2D(10, 17);
var edge1 = new Edge(point1, point2); 
var edge2 = new Edge(point2,point3) 
var edge3 = new Edge(point3, point1)
var triangle = new Triangle(edge1, edge2, edge3); 

console.log("length edge1: "+ edge1.length());
console.log("length edge2: "+ edge2.length());
console.log("length edge3: "+ edge3.length());
console.log("perimeter triangle: "+ triangle.perimeter());
console.log("area triangle: "+ triangle.area());
