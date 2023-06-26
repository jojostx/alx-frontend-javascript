export default function createIteratorObject(report) {
    let iter = {
        [Symbol.iterator]() {
            let values = Object.values(report.allEmployees).flat()
            let index = 0
            
	    return {
                next() {
                    if (index < values.length) {
                        let val = values[index]
                        index++
                        return { value: val, done: false }
                    } else return { done: true }
                },
            }
        },
    }

    return iter;
}
