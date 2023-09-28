import React from 'react'
import { object, string, email, boolean, Output, optional, minLength, url, regex, startsWith } from 'valibot'
import './App.css'

const App: React.FC = () => {

  const formSchema = object({
    fullName: string("Name must be a string", [minLength(1, 'Please enter your full name')]),
    discordId: string("Discord username must be a string", [minLength(1, "Please enter your discord ID")]),
    mobileNumber: string("Your mobile must be a number", [regex(/^\d{10}$/, "Please enter a valid mobile number")]),
    email: optional(string("Email must be a string", [email("Please enter a valid email")])),
    github: optional(string("Github must be a string", [url("enter a valid url"), startsWith('https://github.com', 'Please enter a valid github url')])),
    linkedin: optional(string("LinkedIn must be a string", [url("enter a valid url"), startsWith('https://www.linkedin.com', 'Please enter a valid linkedin url')])),
    roles: object({
      frontEnd: boolean(),
      backEnd: boolean()
    })
  })

  type FormState = Output<typeof formSchema>

  const [formState, setFormState] = React.useState<FormState>({
    fullName: '',
    discordId: '',
    mobileNumber: '',
    email: '',
    github: '',
    linkedin: '',
    roles: {
      backEnd: false,
      frontEnd: false
    }
  })

  type FormErrors = {
    [key in (keyof FormState)]?: string
  }

  const [formErrors, setFormErrors] = React.useState<FormErrors>({})

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let form: FormState = { ...formState }
    Object.keys(formState).forEach(key => {
      if (!['fullName', 'discordId', 'mobileNumber'].includes(key) && formState[key as keyof FormState] === '') {
        form = { ...form, [key]: undefined }
      }
    })
    const result = formSchema._parse(form)
    if (result.issues && result.issues.length > 0) {
      let issues: FormErrors = {}
      for (const issue of result.issues) {
        if (issue.path) {
          issues = { ...issues, [issue.path?.[0].key]: issue.message }
          // setFormErrors((prev: FormErrors) => ({ ...prev, [issue.path?.[0].key]: issue.message }))
        }
      }
      setFormErrors(issues)
    } else {
      setFormErrors({})
      console.log(result)
      // submit form
    }
  }

  React.useEffect(() => {
    console.log(formErrors)
    Object.keys(formErrors).forEach(key => {
      const element = document.getElementById(key)
      if (element) {
        element.classList.add('input-error')
      }
    })
  }, [formErrors])

  return (
    <>
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div style={{ width: 'auto' }}>
        <h1 style={{ position: 'relative' }}>DJX Community Registration 🚀</h1>
        <div className='card'>
          <form id='discordForm' onSubmit={submitHandler}>
            <div className='form-item'>
              <label htmlFor="fullName">Full Name<span className='required'>*</span></label>
              <input className='text-field' type="text" name="fullName" id="fullName"
                value={formState.fullName} onChange={e => setFormState({ ...formState, fullName: e.target.value })}
              />
              {formErrors.fullName && <span className='error'>{formErrors.fullName}</span>}
            </div>
            <div className='form-item'>
              <label htmlFor="discordId">Discord ID<span className='required'>*</span></label>
              <input className='text-field' type="text" name="discordId" id="discordId"
                value={formState.discordId} onChange={e => setFormState({ ...formState, discordId: e.target.value })}
              />
              {formErrors.discordId && <span className='error'>{formErrors.discordId}</span>}
            </div>
            <div className='form-item'>
              <label htmlFor="mobileNumber">Mobile Number<span className='required'>*</span></label>
              <input className='text-field' type="text" name="mobileNumber" id="mobileNumber"
                value={formState.mobileNumber} onChange={e => setFormState({ ...formState, mobileNumber: e.target.value })}
              />
              {formErrors.mobileNumber && <span className='error'>{formErrors.mobileNumber}</span>}
            </div>
            <div className='form-item'>
              <label htmlFor="email">Email</label>
              <input className='text-field' type="email" name="email" id="email"
                value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })}
              />
              {formErrors.email && <span className='error'>{formErrors.email}</span>}
            </div>
            <div className='form-item'>
              <label htmlFor="github">Github</label>
              <input className='text-field' type="url" name="github" id="github"
                value={formState.github} onChange={e => setFormState({ ...formState, github: e.target.value })}
              />
              {formErrors.github && <span className='error'>{formErrors.github}</span>}
            </div>
            <div className='form-item'>
              <label htmlFor="linkedin">LinkedIn</label>
              <input className='text-field' type="url" name="linkedin" id="linkedin"
                value={formState.linkedin} onChange={e => setFormState({ ...formState, linkedin: e.target.value })}
              />
              {formErrors.linkedin && <span className='error'>{formErrors.linkedin}</span>}
            </div>
            <div className='form-item'>
              <label htmlFor="roles">Discord Server Roles</label>
              <div id='roles'>
                <span>
                  <input type="checkbox" name="frontEnd" id="frontEnd"
                    checked={formState.roles?.frontEnd} onChange={e => setFormState({ ...formState, roles: { ...formState.roles, frontEnd: e.target.checked } })}
                  /> <label htmlFor="frontEnd">Front End</label>
                </span>
                <span>
                  <input type="checkbox" name="backEnd" id="backEnd"
                    checked={formState.roles?.backEnd} onChange={e => setFormState({ ...formState, roles: { ...formState.roles, backEnd: e.target.checked } })}
                  /> <label htmlFor="backEnd">Back End</label>
                </span>
              </div>
            </div>
            {/* <div>
            <input type="checkbox" name="tandc" id="tandc" /> I agree to the <a href="#">Terms and Conditions</a>
          </div> */}
            <div className='form-item'>
              <input id='submitButton' type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
