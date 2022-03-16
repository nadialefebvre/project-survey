import React, { useState } from "react"

import ProgressBar from "./ProgressBar"
import NextButton from "./NextButton"

import QuestionTextUserName from "./QuestionTextUserName"
import QuestionSelectMenuGender from "./QuestionSelectMenuGender"
import QuestionRadioWeather from "./QuestionRadioWeather"
import QuestionRadioVehicle from "./QuestionRadioVehicle"
import QuestionRangeSliderSpeed from "./QuestionRangeSliderSpeed"
import QuestionSelectMenuSnack from "./QuestionSelectMenuSnack"
import QuestionTextNotFriendName from "./QuestionTextNotFriendName"
import QuestionRadioBeverage from "./QuestionRadioBeverage"
import QuestionTextFriendName from "./QuestionTextFriendName"
import QuestionSingleCheckoxLikeSports from "./QuestionSingleCheckoxLikeSports"
import QuestionSelectMenuSports from "./QuestionSelectMenuSports"
import QuestionMultipleCheckboxesIngredients from "./QuestionMultipleCheckboxesIngredients"
import QuestionSelectMenuPhone from "./QuestionSelectMenuPhone"
import ConfirmationPage from "./ConfirmationPage"
import Summary from "./Summary"

const FormWrapper = () => {
  const [error, setError] = useState("")

  const [userName, setUserName] = useState("")
  const [gender, setGender] = useState("")
  const [weather, setWeather] = useState("")
  const [vehicle, setVehicle] = useState("")
  const [speed, setSpeed] = useState("")
  const [snack, setSnack] = useState("")
  const [notFriendName, setNotFriendName] = useState("")
  const [beverage, setBeverage] = useState("")
  const [friendName, setFriendName] = useState("")
  const [likeSports, setLikeSports] = useState(false)
  const [sport, setSport] = useState("")
  // const [ingredient, setIngredient] = useState({
  //   ham: false,
  //   cheese: false,
  //   egg: false,
  //   mayo: false,
  //   turkey: false,
  //   lettuce: false,
  //   tuna: false,
  //   tomato: false,
  //   cucumber: false,
  // })
  const [ingredient, setIngredient] = useState([])

  const [phone, setPhone] = useState("")
  const [step, setStep] = useState(1)
  const [isSummaryDisplayed, setIsSummaryDisplayed] = useState(false)

  const handleUserNameChange = (event) => {
    setError("")
    setUserName(event.target.value)
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value)
  }

  const handleWeatherChange = (event) => {
    setWeather(event.target.value)
  }

  const handleVehicleChange = (event) => {
    setVehicle(event.target.value)
  }

  const handleSpeedChange = (event) => {
    setSpeed(event.target.value)
  }

  const handleSnackChange = (event) => {
    setSnack(event.target.value)
  }

  const handleNotFriendNameChange = (event) => {
    setNotFriendName(event.target.value)
  }

  const handleBeverageChange = (event) => {
    setBeverage(event.target.value)
  }

  const handleFriendNameChange = (event) => {
    setFriendName(event.target.value)
  }

  const handleLikeSportsChange = (event) => {
    setLikeSports(event.target.checked)
  }

  const handleSportChange = (event) => {
    setSport(event.target.value)
  }

  // const handleIngredientChange = (event) => {
  //   setIngredient({
  //     ...ingredient,
  //     [event.target.value]: event.target.checked,
  //   })
  // }

  const handleIngredientChange = (test) => {
    setError("")
    if (ingredient.includes(test)) {
      const filteredTest = ingredient.filter((item) => {
        return item !== test
      })
      setIngredient(filteredTest)
    } else {
      setIngredient([...ingredient, test])
    }
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const handleStepChange = (motion) => {
    setStep(step + motion)
  }

  return isSummaryDisplayed ? (
    <Summary
      userName={userName}
      gender={gender}
      weather={weather}
      vehicle={vehicle}
      speed={speed}
      snack={snack}
      notFriendName={notFriendName}
      beverage={beverage}
      friendName={friendName}
      likeSports={likeSports}
      sport={sport}
      ingredient={ingredient}
      phone={phone}
    />
  ) : (
    <>
    {/* doesnt work if I extract ProgressBar??? */}
      {/* <ProgressBar step={step} /> */}
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setIsSummaryDisplayed(true)
        }}
      >
        {step === 1 && (
          <>
            <ProgressBar step={step} />
            <QuestionTextUserName
              userName={userName}
              onUserNameChange={handleUserNameChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 2 && (
          <>
            <ProgressBar step={step} />
            <QuestionSelectMenuGender
              userName={userName}
              gender={gender}
              onGenderChange={handleGenderChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 3 && (
          <>
            <ProgressBar step={step} />
            <QuestionRadioWeather
              weather={weather}
              onWeatherChange={handleWeatherChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 4 && (
          <>
            <ProgressBar step={step} />
            <QuestionRadioVehicle
              weather={weather}
              vehicle={vehicle}
              onVehicleChange={handleVehicleChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 5 && (
          <>
            <ProgressBar step={step} />
            <QuestionRangeSliderSpeed
              vehicle={vehicle}
              speed={speed}
              onSpeedChange={handleSpeedChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 6 && (
          <>
            <ProgressBar step={step} />
            <QuestionSelectMenuSnack
              userName={userName}
              snack={snack}
              onSnackChange={handleSnackChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 7 && (
          <>
            <ProgressBar step={step} />
            <QuestionTextNotFriendName
              snack={snack}
              notFriendName={notFriendName}
              onNotFriendNameChange={handleNotFriendNameChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 8 && (
          <>
            <ProgressBar step={step} />
            <QuestionRadioBeverage
              beverage={beverage}
              onBeverageChange={handleBeverageChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 9 && (
          <>
            <ProgressBar step={step} />
            <QuestionTextFriendName
              beverage={beverage}
              friendName={friendName}
              onFriendNameChange={handleFriendNameChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 10 && (
          <>
            <ProgressBar step={step} />
            <QuestionSingleCheckoxLikeSports
              likeSports={likeSports}
              onLikeSportsChange={handleLikeSportsChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 11 && (
          <>
            <ProgressBar step={step} />
            <QuestionSelectMenuSports
              friendName={friendName}
              sport={sport}
              onSportChange={handleSportChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 12 && (
          <>
            <ProgressBar step={step} />
            <QuestionMultipleCheckboxesIngredients
              ingredient={ingredient}
              onIngredientChange={handleIngredientChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 13 && (
          <>
            <ProgressBar step={step} />
            <QuestionSelectMenuPhone
              phone={phone}
              onPhoneChange={handlePhoneChange}
              onStepChange={handleStepChange}
            />
          </>
        )}

        {step === 14 && (
          <>
            <ProgressBar step={step} />
            <ConfirmationPage
              userName={userName}
              onStepChange={handleStepChange}
            />
          </>
        )}
      </form>
      <div>
        <NextButton
          error={error}
          setError={setError}
          userName={userName}
          likeSports={likeSports}
          ingredient={ingredient}
          step={step}
          onStepChange={handleStepChange}
        />
      </div>
    </>
  )
}

export default FormWrapper
