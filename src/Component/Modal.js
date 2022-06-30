import React from 'react';

const Modal = () => {
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
                        <div class="card-body">
                            <form >

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Full Name</span>
                                    </label>
                                    <input type="text" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Phone</span>
                                    </label>
                                    <input type="text" placeholder="Phone" class="input input-bordered" />
                                    {/* <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Paid Amount</span>
                                    </label>
                                    <input type="text" placeholder="Amount" class="input input-bordered" />
                                </div>

                                <div class="modal-action form-control mt-6">
                                    <label for="my-modal-6" class="btn">Submit </label>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Modal;