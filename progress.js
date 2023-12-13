let last = 171
// Update { last } with the last completed lecture

const start = 117
const end = 213

function calculateProgress(start, end, last) {
    const total = end - start
    const done = last - start
    const progress = Math.ceil(done / total * 100 / 5) * 5

    return progress + "%"
}

const progress = calculateProgress(start, end, last)

progress
// Using Quokka.js to visualise progress without needing to run code