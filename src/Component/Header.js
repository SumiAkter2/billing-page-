import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div class="navbar flex justify-between bg-neutral text-neutral-content px-12">
                <Link to='/' class="btn btn-ghost normal-case font-bold text-2xl">Power-Hack</Link>
                <div>
                    <Link to='/login' className='pr-12'>Log In</Link>
                    <p>Total Paid: --Tk</p>
                </div>
            </div>
        </div>
    );
};

export default Header;