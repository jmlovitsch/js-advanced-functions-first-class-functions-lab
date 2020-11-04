const selectDifferentDrivers = (drivers, whichDrivers) => whichDrivers(drivers)

const returnFirstTwoDrivers = (drivers)  => drivers.slice(0, 2)

const returnLastTwoDrivers = (drivers)  => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => (value) => value * num


const fareDoubler = (createFareMultiplier) => createFareMultiplier * 2


const fareTripler = (createFareMultiplier) => createFareMultiplier * 3

const randomDrivers = selectingDrivers.sample(1)
