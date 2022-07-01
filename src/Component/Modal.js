import React from 'react';
import { useForm } from 'react-hook-form';

const Modal = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {

        fetch(`http://localhost:5000/add-billing`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            }, body: JSON.stringify(data),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };
    return (
        <div>
            <div className='h-20 flex justify-around lg:mx-48 rounded-full mt-6 shadow-2xl bg-blue-200'>
                <label for="my-modal-6" class="btn btn-secondary  rounded-full my-auto">open modal</label>

                <div class="flex-none gap-2 my-auto">
                    <div class="form-control">
                        <input type="text" placeholder="Search" class="input input-bordered bg-secondary text-white rounded-full " />
                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">

                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl text-neutral font-bold">Add New Bill !</h1>
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Full Name</span>

                                </label>
                                <input {...register("name", { required: true, message: 'Name is required' })} type="text" placeholder="Type Full Name" class="input input-bordered w-full max-w-xs" />
                                <label class="label">
                                    <span className='text-red-500'> {errors.name?.type === 'required' &&
                                        'Name is required'}</span>

                                </label>

                                <label class="label">
                                    <span class="label-text"> Email</span>

                                </label>
                                <input  {...register("email", { required: "Email Address is required" })} type="email" placeholder="Type Email" class="input input-bordered w-full max-w-xs" />
                                <label class="label">

                                    <span className='text-red-500' >{errors.email?.message}</span>
                                </label>
                                <label class="label">
                                    <span class="label-text"> Phone</span>

                                </label>
                                <input   {...register("phone", { required: { value: true, minLength: 5 } })} type="number" placeholder="Type Phone no" class="input input-bordered w-full max-w-xs" />
                                <label class="label">

                                    <span className='text-red-500' > {errors.phone?.type === 'required' && "phone is required"} </span>
                                </label>
                                <label class="label">
                                    <span class="label-text"> Paid Amount</span>

                                </label>
                                <input  {...register("paid", { required: true, message: 'hello' })} type="number" placeholder="Type amount" class="input input-bordered w-full max-w-xs" />
                                <label class="label">

                                    <span className='text-red-500' >{errors.paid?.message}</span>
                                </label>
                            </div>




                            <input className='btn' type="submit" />
                        </form>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Modal;