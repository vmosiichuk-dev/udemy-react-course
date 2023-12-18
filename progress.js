let current = 182
// Update { current } with the last completed lecture

const start = 117
const finish = 213

function calculateProgress(start, finish, current) {
    const total = finish - start
    const done = current - start
    const progress = Math.ceil(done / total * 100 / 5) * 5

    return progress + "%"
}

const progress = calculateProgress(start, finish, current)

progress
// Using Quokka.js to visualise progress without needing to run code