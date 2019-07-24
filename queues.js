/* Queues */

function Queue() {
	collection = [];
	this.print = function() {
		console.log(collection);
	};
	this.enqueue = function(element) {
		collection.push(element);
	};
	this.dequeue = function(element) {
		return collection.shift();
	};
	this.front = function() {
		return console.log(collection[0]);
	};
	this.isEmpty = function() {
		return (collection.length === 0);
	};
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.front();
q.print();