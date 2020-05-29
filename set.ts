namespace mySet {

    class MySet {

        private collection: Array<any>;

        constructor() {
            this.collection = [];
        }

        /**
         * 
         * @param element whether MySet contains value element
         */
        has(value: any): Boolean {
            return this.collection.indexOf(value) === -1 ? false : true;
        }

        /**
         * 
         * @param value push value to MySet unless value not exists  
         */
        add(value: any): Boolean {
            if (!this.has(value)) {
                this.collection.push(value);
                return true;
            }
            return false;
        }

        /**
         * 
         * @param value remmove value if exists
         */
        remove(value: any): Boolean {
            if (this.has(value)) {

                let index = this.collection.indexOf(value);
                this.collection.splice(index, 1);

                return true;
            }
            return false;
        }

        size(): number {
            return this.collection.length;
        }

        value(): Array<any> {
            return this.collection;
        }
    }

    let myset = new MySet();

    myset.add(1);
    myset.add(5);
    myset.add(1);
    myset.remove(1);

    console.log(myset.value());
}