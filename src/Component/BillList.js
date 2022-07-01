import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const BillList = () => {
    const [bill, setBill] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/billing-list`)
            .then(res => res.json())
            .then(data => setBill(data))
    }, [])




    const handleDelete = (id) => {

        alert('Sure to delete?')

        fetch(`http://localhost:5000/delete-billing/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },

        }).then(res => res.json())
            .then(data => {
                const restData = bill.filter(o => o._id !== id)
                setBill(restData);

                console.log(data);
            })
    }

    return (
        <div >
            <Modal></Modal>
            {bill.length}
            <div class="overflow-x-auto px-12 shadow-lg mt-20">
                <table class="table w-full shadow-lg">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Billing Id</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bill.map((b, index) =>

                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{b._id.slice(- 5)}</td>
                                    <td>{b.name}</td>
                                    <td>{b.email}</td>
                                    <td>{b.phone} </td>
                                    <td>{b.paid} </td>
                                    <td className='btn' onClick={() => handleDelete(b._id)}>x</td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BillList;
