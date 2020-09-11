import React, { useEffect, useState } from 'react'

function Filter(props) {

    let years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    let toggles = ["True", "False"]


    const toggleButton = (func, data, selectedValue) => (
        <div key={data} className={`flex justify-center items-center mb-4 rounded ${selectedValue == data ? "bg-red-500" : "bg-green-300"} w-16 h-8 mx-4`}>
            <button type="submit" value={data} onClick={e => func(selectedValue == data ? undefined : e.target.value)}>
                {data}
            </button>
        </div>
    )

    return (
        <div className="h-full w-64 bg-white py-2 col-fi">
            <div className="ml-4 py-2">
                <span className="font-bold">Filters</span>
            </div>
            <span className="flex justify-center text-sm">Launch Year</span>
            <div className="h-px bg-gray-500 mx-16 mb-4" />
            <div className="flex justify-center">
                <div className="px-8 flex flex-wrap ">
                    {years.map(year => toggleButton(props.setSelectYear, year, props.selectYear))}
                </div>
            </div>
            <span className="flex justify-center text-sm mt-2">Successful Launch</span>
            <div className="h-px bg-gray-500 mx-16 mb-4" />
            <div className="flex justify-center">

                <div className="px-8 flex flex-wrap ">
                    {toggles.map(bool => toggleButton(props.setSuccessLaunch, bool, props.successLaunch))}
                </div>
            </div>
            <span className="flex justify-center text-sm mt-2">Successful Landing</span>
            <div className="h-px bg-gray-500 mx-16 mb-4" />
            <div className="flex justify-center">
                <div className="px-8 flex flex-wrap  mb-8">
                    {toggles.map(bool => toggleButton(props.setSuccessLand, bool, props.successLand))}
                </div>
            </div>
        </div>
    )
}


export default Filter