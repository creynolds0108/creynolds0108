function lifeInWeeks(age) {
        const years = 90 - age;
        const months = years * 12;
        const weeks = 52 * years;
        const days = 365 * years;
        console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");   
    }