namespace stack {

    class Stack {
        private count: number;
        public storage: Array<number>;

        constructor() {

            this.count = 0;
            this.storage = [];

        }
        push(value: any) {

            this.storage[this.count] = value;
            this.count++;
        }
        pop() {

            if (this.count === 0) {
                return undefined;
            }


            let value = this.storage[--this.count];
            delete this.storage[this.count];
            return value;
        }
        size() {
            return this.count;
        }

        peek() {
            return this.storage[this.count - 1];
        }
    }

    let stack = new Stack();

    stack.push(3);
    stack.push(4);
    stack.push(5);

    console.log(stack.size());
    console.log(stack.peek());
    stack.pop();
    console.log(stack.peek());

}