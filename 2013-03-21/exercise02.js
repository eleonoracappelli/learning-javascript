function Edge(p1, p2){ //a

	this.p2 = p2;
	this.p1 = p1;
	
}

Edge.prototype.length = function (){ //b

	var powX = Math.pow((this.p2.x - this.p1.x), 2);
	var powY = Math.pow((this.p2.y - this.p1.y), 2);

	return Math.sqrt(powX + powY);
}