import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
const Alert = () => {
    return (
        <aside id="default-sidebar" className="z-40 h-screen shadow-lg rounded-lg" aria-label="Sidebar">
            <h1 className='text-xl font-bold'>Alerts</h1>
            <h1 className='mt-2 text-2xl font-bold flex justify-center items-center'><FaMapMarkerAlt /><span className='ml-2'>Kanpur, Uttar Pradesh</span></h1>
            <div className="h-full px-3 py-4 overflow-y-auto">
                <ul className="space-y-4 font-medium">
                    <li>
                        <a href="/alert" className="flex justify-between items-center p-2 rounded-lg group shadow-sm hover:shadow-md">
                            <span className="ml-3 text-left">
                                <div>Urgent Medical Assistance Needed</div>
                                <div className='text-sm text-gray-500'>Created an hour ago</div>
                                <div className='text-sm text-gray-500'>Rescue Team A</div>
                            </span>
                            <GoAlertFill size={20} className='text-red-600' />
                        </a>
                    </li>
                    <li>
                        <a href="/alert" className="flex justify-between items-center p-2 rounded-lg group shadow-sm hover:shadow-md">
                            <span className="ml-3 text-left">
                                <div>Emergency Shelter Required</div>
                                <div className='text-sm text-gray-500'>Created 5 hours ago</div>
                                <div className='text-sm text-gray-500'>Shelter Services</div>
                            </span>
                            <GoAlertFill size={20} className='text-red-600' />
                        </a>
                    </li>
                    <li>
                        <a href="/alert" className="flex justify-between items-center p-2 rounded-lg group shadow-sm hover:shadow-md">
                            <span className="ml-3 text-left">
                                <div>Fire Evacuation</div>
                                <div className='text-sm text-gray-500'>Created 12 hours ago</div>
                                <div className='text-sm text-gray-500'>Fire Department</div>
                            </span>
                            <TiTick size={20} className='text-green-600 ' />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Alert;
