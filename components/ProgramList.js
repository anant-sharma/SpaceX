import React, { useEffect, useState } from 'react';
const fallbackImage = "https://images2.imgbox.com/40/e3/GypSkayF_o.png"

function ProgramList(props) {
    return (
        <div className="pl-box">
            {props.data && props.data.map((item, key) => {
                return (
                    <Program item={item} key={key}/>
                )
            })}
        </div>
    )
}

const Program = (props) => {
    return (
        <div key={props.item.flight_number} className="bg-white px-4 py-4 text-sm mb-4 flex flex-col la-p" style={{ width: "256px" }}>
            <img
                className="bg-gray-300"
                src={props.item.links.mission_patch ? props.item.links.mission_patch : fallbackImage}
                alt=""
            />
            <span className="font-bold text-purple-500 mt-2">{props.item.mission_name} #{props.item.flight_number}</span>
            <span className="font-bold mt-2">Mission Ids:</span>
            <ul className="ml-6" style={{ listStyleType: "disc" }}>
                {props.item.mission_id.length !== 0 && props.item.mission_id.map((id, key) => <li key={key}>{id}</li>)}
            </ul>
            <span className="font-bold mt-2">Launch Year:<span className="text-purple-400 font-normal">{""}{props.item.launch_year}</span></span>
            <span className="font-bold mt-2">Successful Launch:<span className="text-purple-400 font-normal">{" "}{props.item.launch_success ? "true" : "false"}</span></span>
            <span className="font-bold mt-2">Successful Landing:<span className="text-purple-400 font-normal">{" "}{props.item.launch_landing !== undefined ? props.item.launch_landing : "N/A"}</span></span>

        </div>
    )
}

export default ProgramList