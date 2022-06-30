import React from 'react';

const Modal = () => {
    return (
        <div>
            <div className='h-20 flex justify-around lg:mx-48 rounded-full mt-6 shadow-3xl bg-neutral'>
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
                    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;