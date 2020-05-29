namespace queue {

    class Queue {

        public storage: Array<number>;

        constructor() {

            this.storage = [];
        }
        /**
         * 
         * @param value add value to queue
         */
        enqueue(value: any): void {
            this.storage.push(value);
        }
        /**
         * 
         * @param value cut value out queue
         */
        dequeue(): any {
            return this.storage.shift();
        }

        getQueue(): Array<any> {
            return this.storage;
        }

        front() {
            return this.storage[0];
        }
        isEmpty(): Boolean {
            return (this.storage.length === 0)
        }



    }

    let queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    console.log(queue.getQueue());

    let valueFront = queue.dequeue();
    console.log(valueFront);
    console.log(queue.getQueue());

    console.log(queue.isEmpty());
    console.log(queue.front());
}