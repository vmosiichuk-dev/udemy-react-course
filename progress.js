// Update {last} with the last completed lecture
let last = 169;
const start = 117,
      end = 213;

function calculateProgress(start, end, last) {
    const total = end - start,
          done = last - start,
          progress = Math.ceil(done / total * 100 / 5) * 5;

    return progress + "%";
}

const progress = calculateProgress(start, end, last);

// Using Quokka.js extension to visualise progress without needing to run code
progress