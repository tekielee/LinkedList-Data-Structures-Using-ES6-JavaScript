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
	
	insertAtFirst(data) {
		let newNode = new ListNode(data);
		
		if(this.firstNode == null) {
			this.firstNode = newNode;
		} else {
			let currentFirstNode = this.firstNode;
			this.firstNode = newNode;
			newNode.next = currentFirstNode;
		}
		
		this.totalNode++;
		return true;
	}
	
	insertBefore(data, query) {
		let newNode = new ListNode(data);

		if(this.firstNode) {
			let previous = null;
			let currentNode = this.firstNode;
			while(currentNode != null) {
				if(currentNode.data == query) {
					console.log('found')
					newNode.next = currentNode;
					previous.next = newNode;
					this.totalNode++;
					break;
				}
				previous = currentNode;
				currentNode = currentNode.next;				
			}
		}
	}
	
	search(data) {
		if(this.totalNode) {
			let currentNode = this.firstNode;
			while(currentNode != null) {
				if(currentNode == data) {
					return currentNode;
				}
				
				currentNode = currentNode.next;
			}
		}
		
		return false;
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

bookTitles.insertAtFirst('Mediawiki Administratrive tutorial guide')
bookTitles.display();

bookTitles.insertBefore('Introduction to Calculus', 'Programming Intelligence');
bookTitles.display();
