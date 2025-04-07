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
        className: 'text-red-600 text-sm mt-1'
    }));

    const changeHandler = e => {
        setForms({...forms, [e.target.name]: e.target.value});
        if(validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if(validator.allValid()){
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                message: '' 
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={submitHandler} className='space-y-6  p-6 rounded-lg shadow-lg'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                    <input
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                         focus:ring-orange-500"
                         value={forms.name}
                         type="text"
                         name="name"
                         onBlur={changeHandler}
                         onChange={changeHandler}
                         placeholder='Your Name'
                    />
                    {validator.message('name', forms.name, 'required|alpha_space')}
                </div>
                <div>
                    <input
                        className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                        value={forms.email}
                        type='email'
                        name='email'
                        onBlur={changeHandler}
                        onChange={changeHandler}
                        placeholder='Your Email'
                    />
                    {validator.message('email', forms.email, 'required|email')}
                </div>

            </div>
            <div>
                <select
                 className='w-full p-3 border border-gray-300 rounded-md focus-md:outline-none focus:ring-2 focus:ring-orange-500'
                 onBlur={changeHandler}
                 onChange={changeHandler}
                 value={forms.subject}
                 name="subject"
                >
                    <option value=''>Choose a Service</option>
                    <option value='1'>Web Design</option>
                    <option value='2'>Mobile App Design</option>
                    <option value='3'>Brand Identity</option>
                    <option value='4'>Market Analysis</option>

                </select>
                {validator.message('subject', forms.subject, 'required')}
            </div>
            <div>
                <textarea
                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
                    onBlur={changeHandler}
                    onChange={changeHandler}
                    value={forms.message}
                    name="message"
                    placeholder='Message'
                    rows="4"
                >

                </textarea>

                {validator.message('message', forms.message, 'required')}
            </div>
            <div className='text-center'>
                <button
                    type='submit'
                    className='bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-300'
                >
                    Submit Now
                </button>

            </div>

        </form>
    );
};

export default Contact;