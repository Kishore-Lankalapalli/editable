import {useState} from 'react'

import './App.css'

// Replace your code here
const App = () => {
  const [userInput, setUserInput] = useState('')
  const [isSaved, toggleSaveBtn] = useState(false)

  return (
    <div className="editable-text-container">
      <div className="card-container">
        <h1 className="editable-text-heading">Editable Text Input</h1>
        <div className="input-container">
          {isSaved ? (
            <p className="entered-user-input-text">{userInput}</p>
          ) : (
            <input
              onChange={e => setUserInput(e.target.value)}
              className="text-input"
              type="text"
              value={userInput}
            />
          )}

          <button
            onClick={() => toggleSaveBtn(!isSaved)}
            className="save-button"
          >
            {isSaved ? 'Edit' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
