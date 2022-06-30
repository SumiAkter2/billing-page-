import React, { useEffect, useState } from 'react';
import BillDetails from './BillDetails';

const BillList = () => {
    const [bill, setBill] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/billing-list`)
            .then(res => res.json())
            .then(data => setBill(data))
    }, [])
    return (
        <div className='mt-24'>

            <div class="overflow-x-auto px-12 shadow-lg">
                <table class="table w-full shadow-lg">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Edit/X</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bill.map((b, index) =>

                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{b.name}</td>
                                    <td>{b.email}</td>
                                    <td>{b.phone} </td>
                                    <td>{b.paid} </td>
                                    <td>x</td>
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
