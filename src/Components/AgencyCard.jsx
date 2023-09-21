import React from 'react'

const AgencyCard = (props) => {
    const { imageUrl, title, description } = props;
    return (
        <div className="w-full max-w-sm  rounded-lg shadow hover:shadow-lg">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={imageUrl} />
                <h5 className="mb-1 text-xl font-medium ">{title}</h5>
                <span className="text-sm px-3">{description}</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">View More</a>
                </div>
            </div>
        </div>

    )
}

export default AgencyCard
