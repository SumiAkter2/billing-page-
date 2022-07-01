import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        fetch('http://localhost:5000/registration', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate('/');
                }
                console.log(data);
            })
    }


    return (
        <div className='flex justify-center my-12'>


            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin}>
                    <h1 className='text-3xl font-bold pl-12 py-6'>Registration</h1>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" name='Name' placeholder="Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" class="input input-bordered" />
                            <p>Already Here? <Link to='/login' className='text-violet-500'>Please Log In !</Link></p>
                        </div>
                        <div class="form-control mt-6">
                            <button type="submit" class="btn btn-neutral">Register</button>
                        </div>
                    </div>

                </form>
            </div>
        </div >
    );
};

export default Register;