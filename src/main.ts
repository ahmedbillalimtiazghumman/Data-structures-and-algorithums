import {LinkedList} from './linked-list';


function init(): void {
    const linkedList = new LinkedList();
    linkedList.insertInBegin('shit one');
    linkedList.insertInBegin('shit two');
    linkedList.insertInBegin('shit three');
    linkedList.insertInBegin('shit four');
    const toDelete = linkedList.insertAtEnd('last shit one');
    linkedList.insertAtEnd('last shit two');
    linkedList.insertAtEnd('last shit three');
    linkedList.insertAtEnd('last shit four');
    linkedList.deleteNode(toDelete);
    console.log(linkedList);
}


init();
