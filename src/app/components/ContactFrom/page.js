import React, {useState} from 'react'
import SimpleReactValidator from 'simple-react-validator'

const ContactForm = () => {
    const [forms, setForms] = useState ({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({...forms, [e.target.name]: e.target.value})
        if(validaotor.allValid()){
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if(validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email:'',
                subject:'',
                phone:'',
                message:''
            })
        } else {
            validator.showMessages();
        }
    };


    return (
        <form method="post" className='contact-validation-active' onSubmit={(e) => submitHandler(e)}>
            <div className='flex flex-wrap align-items-center'>
                <div className='w-full md:w-1/2'>
                    <div className='form-group'>
                        <label>Name*</label>
                        <input
                            value={forms.name}
                            type='text'
                            name='name'
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className='form-control'
                            placeholder='Your Name'
                        />
                        {validator.message('name', forms.name, 'required|alpha_space')}

                    </div>

                </div>
                <div className='w-full md:w-1/2'>
                    <div className='form-group'>
                        <label>Email*</label>
                        <input 
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            className='form-control'
                            placeholder='Your Email'
                        />
                        {validator.message('email', forms.email, 'required|email')}

                    </div>

                </div>
                <div className='md:w-full'>
                    <div className='fullwidth form-group'>
                        <label>Message*</label>
                        <textarea
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.message}
                            type="text"
                            name="message"
                            className='form-control'
                            placeholder='Message'
                        >

                        </textarea>
                        {validator.message('message', forms.message, 'required')}

                    </div>

                </div>

                <div className='w-full md:w-5/12 order-2 md:order-1'>
                    <div className='submit-area'>
                        <button type="submit" className='theme-btn'>
                            Submit now
                        </button>
                        <div id="loader">
                            <i className='ti-reload'></i>

                        </div>

                    </div>

                </div>
                <div className="w-full md:w-7/12 order-1 md:order-2" >
                    <div className='contact-info'>
                        <ul>
                            <li><i className="fi flaticon-phone-call"></i> +1238575694</li>
                            <li><i className="fi flaticon-mail"></i> example@mail.com</li>
                        </ul>

                    </div>

                </div>

            </div>

        </form>
    )

}

export default ContactForm;