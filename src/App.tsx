import './App.css'

function App() {

  return (
    <div style={{ width: 'auto' }}>
      <h1>DJX Community Registration 🚀</h1>
      <div className='card'>
        <form id='discordForm' action="">
          <div className='form-item'>
            <label htmlFor="name">Full Name<span className='required'>*</span></label>
            <input className='text-field' type="text" name="fname" id="fname" />
          </div>
          <div className='form-item'>
            <label htmlFor="discord">Discord Username<span className='required'>*</span></label>
            <input className='text-field' type="text" name="discord" id="discord" />
          </div>
          <div className='form-item'>
            <label htmlFor="mobileNo">Mobile Number<span className='required'>*</span></label>
            <input className='text-field' type="text" name="mobileNo" id="mobileNo" />
          </div>
          <div className='form-item'>
            <label htmlFor="email">Email</label>
            <input className='text-field' type="email" name="email" id="email" />
          </div>
          <div className='form-item'>
            <label htmlFor="github">Github</label>
            <input className='text-field' type="url" name="github" id="github" />
          </div>
          <div className='form-item'>
            <label htmlFor="linkedin">LinkedIn</label>
            <input className='text-field' type="url" name="linkedin" id="linkedin" />
          </div>
          <div className='form-item'>
            <label htmlFor="roles">Discord Server Roles</label>
            <div id='roles'>
              <span>
                <input type="checkbox" name="frontEnd" id="frontEnd" /> Front End
              </span>
              <span>
                <input type="checkbox" name="backEnd" id="backEnd" /> Back End
              </span>
            </div>
          </div>
          {/* <div>
            <input type="checkbox" name="tandc" id="tandc" /> I agree to the <a href="#">Terms and Conditions</a>
          </div> */}
          <div>
            <input id='submitButton' type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
