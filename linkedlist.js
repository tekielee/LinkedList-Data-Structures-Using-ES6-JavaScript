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
	
	insertAfter(data, query) {
		let newNode = new ListNode(data);

		if(this.firstNode) {
			let nextNode = null;
			let currentNode = this.firstNode;
			while(currentNode != null) {
				if(currentNode.data == query) {
					if(nextNode != null) {
						newNode.next = nextNode;
					}
					currentNode.next = newNode;
					this.totalNode++;
					break;
				}
				currentNode = currentNode.next;
				nextNode = currentNode.next;				
			}
		}
	}
	
	deleteFirst() {
		if(this.firstNode != null) {
			if(this.firstNode.next != null) {
				this.firstNode = this.firstNode.next;
			} else {
				this.firstNode = null;
			}
			
			this.totalNode--;
			return true;
		}
		
		return false;
	}
	
	deleteLast() {
		if(this.firstNode != null) {
			let currentNode = this.firstNode;
			if(currentNode.next == null) {
				this.firstNode = null;
			} else {
				let previousNode = null;
			
				while(currentNode.next != null) {
					previousNode = currentNode;
					currentNode = currentNode.next;
				}
			
				previousNode.next = null;
				this.totalNode--;
				return true;
			}
		}
		return false;
	}
	
	searchAndDelete(query) {
		if(this.firstNode) {
			let previous = null;
			let currentNode = this.firstNode;
			while(currentNode != null) {
				if(currentNode.data == query) {
					if(currentNode.next == null) {
						previous.next = null;
					} else {
						previous.next = currentNode.next;
					}
					
					this.totalNode--;
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
				if(currentNode.data == data) {
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

bookTitles.insertAfter('Introduction to Calculus', 'Programming Intelligence');
bookTitles.display();

bookTitles.deleteFirst();
bookTitles.display();

bookTitles.deleteLast();
bookTitles.display();

bookTitles.searchAndDelete('Introduction to JavaScript and Data Structures');
bookTitles.display();