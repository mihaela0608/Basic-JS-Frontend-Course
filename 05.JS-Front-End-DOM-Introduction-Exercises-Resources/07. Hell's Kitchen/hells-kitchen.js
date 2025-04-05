function solve() {
    const input = JSON.parse(document.querySelector('#inputs textarea').value);
    const restaurants = {};

    for (let line of input) {
        let [restaurantName, workersData] = line.split(' - ');
        let workersArr = workersData.split(', ');

        if (!restaurants[restaurantName]) {
            restaurants[restaurantName] = [];
        }

        for (let worker of workersArr) {
            let [name, salary] = worker.split(' ');
            salary = Number(salary);
            restaurants[restaurantName].push({ name, salary });
        }
    }

    let bestRestaurant = '';
    let bestAverageSalary = 0;
    let bestWorkers = [];

    for (let [name, workers] of Object.entries(restaurants)) {
        let averageSalary = workers.reduce((sum, w) => sum + w.salary, 0) / workers.length;

        if (averageSalary > bestAverageSalary) {
            bestRestaurant = name;
            bestAverageSalary = averageSalary;
            bestWorkers = workers.slice(); // copy
        }
    }

    bestWorkers.sort((a, b) => b.salary - a.salary);
    let bestSalary = bestWorkers[0].salary;

    // Output
    document.querySelector('#bestRestaurant span').textContent =
        `Name: ${bestRestaurant} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    document.querySelector('#workers p').textContent = bestWorkers
        .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
        .join(' ');
}
