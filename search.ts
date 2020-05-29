// tìm kiếm tuyến tính

namespace seach {
    class Search {

        public data: Array<number>;
        public number: number;

        constructor(data: Array<number> = [], numSearch: number) {
            this.data = data;
            this.number = numSearch
        }

        LinearSearch() {
            // Lặp qua hết tất cả các phần tử rồi so sánh
            let i = 0;
            console.time('taskA');
            while (i < this.data.length) {

                if (this.data[i] === this.number) {
                    console.timeEnd('taskA');
                    return i;
                }
                i++;
            }
            console.timeEnd('taskA');
            return 'nothing found';
        }

        binarySearch() {
            /**
             * Giả xử mảng là tăng dần hoặc giảm dần
             * So sánh với phần tử  nằm giữa => chọn ra khoảng không gian 
             * Rồi tiếp tục lại so sánh với phần tử nằm giữa ở đoạn nhỏ hơn
             * 
             * Điều kiện dừng là left > right 
             * */
            let left: number = 0;
            let right: number = this.data.length - 1;
            let mid: number;

            do {
                mid = Math.ceil((left + right) / 2);

                console.log("this is mid ", mid);
                console.log("this is left ", left);
                console.log("this is right ", right);
                console.log("-----------------")
                if (this.number === this.data[mid]) {
                    return mid;
                }
                else if (this.number > this.data[mid]) {
                    left = mid + 1;
                }
                else if (this.number < this.data[mid]) {
                    right = mid - 1;
                }
            }
            while (left <= right);

            return "nothing found";
        }


    }
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
        13, 14, 15, 16, 17, 18, 19, 20
    ]

    let search = new Search(data, 11)
    console.log(search.binarySearch());

}
