let userName = ''
let gender = ''
let weather = ''
let vehicle = ''
let speed = ''
let snack = ''
let notFriendName = ''
let beverage = ''
let friendName = ''
let sport = ''
let ingredientOne = ''
let ingredientTwo = ''
let phone = ''

export const RandomUserName = () => {
  const userNameOptions = ["Emma", "Jessica", "Joanna", "Laura", "Lisa", "Maurii", "Nadia", "Rijad", "Sofie", "Terese"]
  if (userName === '') {
    userName = userNameOptions[Math.floor(Math.random() * (userNameOptions.length))]
  }
  return userName
}

export const RandomGender = () => {
  const genderOptions = ["feminine", "masculine", "non-binary"]
  if (gender === '') {
    gender = genderOptions[Math.floor(Math.random() * (genderOptions.length))]
  }
  return gender
}

export const RandomWeather = () => {
  const weatherOptions = ["sunny", "cloudy"]
  if (weather === '') {
    weather = weatherOptions[Math.floor(Math.random() * (weatherOptions.length))]
  }
  return weather
}

export const RandomVehicle = () => {
  const vehicleOptions = ["bicycle", "e-scooter", "motorcycle"]
  if (vehicle === '') {
    vehicle = vehicleOptions[Math.floor(Math.random() * (vehicleOptions.length))]
  }
  return vehicle
}

export const RandomSpeed = () => {
  const speedOptions = ["1", "2", "3"]
  if (speed === '') {
    speed = speedOptions[Math.floor(Math.random() * (speedOptions.length))]
  }
  return speed
}

export const RandomSnack = () => {
  const snackOptions = ["chocolate bar", "candies", "nuts"]
  if (snack === '') {
    snack = snackOptions[Math.floor(Math.random() * (snackOptions.length))]
  }
  return snack
}

export const RandomNotFriendName = () => {
  const notFriendNameOptions = ["Jennie", "Karin", "Daniel", "Maksymilian", "Poya", "Rebecca", "Marie", "Petra"]
  if (notFriendName === '') {
    notFriendName = notFriendNameOptions[Math.floor(Math.random() * (notFriendNameOptions.length))]
  }
  return notFriendName
}

export const RandomBeverage = () => {
  const beverageOptions = ["coffee", "tea"]
  if (beverage === '') {
    beverage = beverageOptions[Math.floor(Math.random() * (beverageOptions.length))]
  }
  return beverage
}

export const RandomFriendName = () => {
  const friendNameOptions = ["Anki", "Arianna", "Amanda", "Michael", "Ida", "Marianne", "Simon", "Savannah", "Nabeel", "Lovisa"]
  if (friendName === '') {
    friendName = friendNameOptions[Math.floor(Math.random() * (friendNameOptions.length))]
  }
  return friendName
}

export const RandomSport = () => {
  const sportOptions = ["football", "hockey", "baseball", "basketball", "floorball"]
  if (sport === '') {
    sport = sportOptions[Math.floor(Math.random() * (sportOptions.length))]
  }
  return sport
}

export const RandomIngredientTwo = () => {
  const ingredientOneOptions = ["lettuce", "tuna", "tomato", "cucumber"]
  if (ingredientOne === '') {
    ingredientOne = ingredientOneOptions[Math.floor(Math.random() * (ingredientOneOptions.length))]
  }
  return ingredientOne
}

export const RandomIngredientOne = () => {
  const ingredientTwoOptions = ["ham", "cheese", "egg", "mayo", "turkey"]
  if (ingredientTwo === '') {
    ingredientTwo = ingredientTwoOptions[Math.floor(Math.random() * (ingredientTwoOptions.length))]
  }
  return ingredientTwo
}

export const RandomPhone = () => {
  const phoneOptions = ["iPhone", "Samsung", "Huawei"]
  if (phone === '') {
phone = phoneOptions[Math.floor(Math.random() * (phoneOptions.length))]
  }
  return phone
}
