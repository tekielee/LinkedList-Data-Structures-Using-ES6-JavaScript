class ListNode {
	constructor(data) {
		this.data = data;
		this.next =	 null;
	}
}

class LinkedList {
	constructor() {
		this.firstNode = null;
		this.totalNode = 0;
	}
	
	insert(data) {
		let newNode = new ListNode(data);
		
		if(this.firstNode == null) {
			this.firstNode = newNode;			
		} else {
			let currentNode = this.firstNode;
			while(currentNode.next != null) {
				currentNode = currentNode.next;				
			}
			
			currentNode.next = newNode;
			
		}
		
		this.totalNode++;
		return true;
	}
	
	display() {
		console.log('Total book titles: ' + this.totalNode);
		let currentNode = this.firstNode;
		while(currentNode != null) {
			console.log(currentNode.data);
			currentNode = currentNode.next;
		}
	}
}

const bookTitles = new LinkedList();
bookTitles.insert('Introduction to Algorithm');
bookTitles.insert('Introduction to JavaScript and Data Structures');
bookTitles.insert('Programming Intelligence');
bookTitles.display();