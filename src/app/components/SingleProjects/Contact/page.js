import React, {useState} from 'react';
import SimpleReactValidator from 'simple-react-validator';

const Contact = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({
            ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className='contact-validation-active'>
            <div className='row'>
                <div className='w-full md:w-1/2 lg:w-1/2 px-3'>
                    <div className='form-field'>
                        <input 
                            className='form-control'
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur = {(e) => changeHandler(e)}
                            onChange = {(e) => changeHandler(e)}
                            placeholder='Your Name'
                        />

                    </div>
                    {validator.message('name', forms.name, 'required|alpha_space')} 

                </div>
                <div className='w-full px-3'>
                    <div className='form-field'>
                        <textarea
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.message}
                            type="text"
                            name="message"
                            placeholder="Message">
                        </textarea>
                        {validator.message('message', forms.message, 'required')}

                    </div>

                </div>
                <div className='submit-area'>
                    <button type="submit" className='theme-btn-s2'>
                        Submit Now

                    </button>

                </div>

            </div>

        </form>
    )
}

export default Contact;