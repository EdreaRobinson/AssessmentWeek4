const goalsContainer = document.querySelector('#goals-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/goals`

const goalsCallback = ({ data: goals }) => displayGoals(goals)
const errCallback = err => console.log(err.response.data)

const getAllGoals = () => axios.get(baseURL).then(goalsCallback).catch(errCallback)
const createGoal = body => axios.post(baseURL, body).then(goalsCallback).catch(errCallback)
const deleteGoal = id => axios.delete(`${baseURL}/${id}`).then(goalsCallback).catch(errCallback)
const updateGoal = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(goalsCallback).catch(errCallback)

function submitHandler(e) {
  e.preventDefault()

  let goal = document.querySelector('#goal')
  let imageURL = document.querySelector('#img')
  // let percent = document.querySelector('input [name="percent"]:checked')
  let targetDate = document.querySelector('#target')
  let tips = document.querySelector('input[name="tip"]:checked')

  let bodyObj = {
      goal: goal.value,
      imageURL: imageURL.value,
      // percent: percent.value, 
      targetDate: targetDate.value,
      tips: tips.value
  }

  createGoal(bodyObj)

  goal.value = ''
  imageURL.value = ''
  // percent.checked = false
  targetDate.value = ''
  tips.value = ''
}

function createGoalCard(item) {
  const goalCard = document.createElement('div')
  goalCard.classList.add('goal-card')

  goalCard.innerHTML = `<img alt='goal cover image' src=${item.imageURL} class="goal-cover-image"/>
  <p class="item">${item.goal}</p>
  <div class="btns-container">
      <button onclick="updateGoal(${item.id}, 'minus')">-</button>
      // <p class="goal-percent">${item.percent}complete</p>
      <button onclick="updateGoal(${item.id}, 'plus')">+</button>
  </div>
  <button onclick="deleteGoal(${item.id})">delete</button>
  `


  goalsContainer.appendChild(goalCard)
}

function displayGoals(arr) {
  goalsContainer.innerHTML = ``
  for (let i = 0; i < arr.length; i++) {
      createGoalCard(arr[i])
  }
}

form.addEventListener('submit', submitHandler)

getAllGoals()