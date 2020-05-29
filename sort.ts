// tìm kiếm tuyến tính 

namespace Sort {
    class Sort {

        public data: Array<number>;

        constructor(data: Array<number> = []) {
            this.data = data;
        }

        swap(i: number, j: number): void {

            let flag = this.data[i];
            this.data[i] = this.data[j];
            this.data[j] = flag;

            return;

        }

        // đổi chổ  trực tiếp các phần tử  n(n -1 ) lần so sánh
        interchangeSort(): void {

            let i: number;
            let j: number;

            for (i = 0; i < this.data.length; i++) {

                for (j = i + 1; j < this.data.length; j++) {

                    if (this.data[i] > this.data[j]) {
                        this.swap(i, j);
                    }
                }

            }
            console.log("interchange Sort :", this.data);
        };
        // chọn phần tử nhỏ nhất đưa về đầu mảng
        selectionSort(): void {

            let i: number;
            let j: number;
            let min: number;
            for (i = 0; i < this.data.length; i++) {
                min = i;

                for (j = i + 1; j < this.data.length; j++) {

                    if (this.data[j] < this.data[min]) {
                        min = j
                    }
                }

                if (min != i) {
                    this.swap(i, min)
                }

            }
            console.log("Selection sort ", this.data);
        }

        bubbleSort(): void {
            let i: number;
            let j: number;

            for (i = 0; i < this.data.length; i++) {
                for (j = this.data.length - 1; j > i; j--) {
                    if (this.data[j] < this.data[j - 1]) {
                        this.swap(j - 1, j);
                    }
                }
            }
            console.log("Bubble sort ", this.data);
        }

    }





    let data = [1, 13, 16, 4, 20, 6, 7, 11, 9, 10, 8, 12,
        2, 14, 15, 3, 17, 18, 19, 5
    ]

    let sort = new Sort(data)
    sort.bubbleSort();
}
