import React, { useEffect, useState } from 'react'
import Filter from "./Filter"
import ProgramList from "./ProgramList"
import axios from 'axios';
import { useRouter } from "next/router";

const URL = "https://api.spacexdata.com/v3/launches?limit=100"

function HomeView(props) {

    let [data, setData] = useState(props.data)
    let [selectYear, setSelectYear] = useState(undefined)
    let [successLaunch, setSuccessLaunch] = useState(undefined)
    let [successLand, setSuccessLand] = useState(undefined)
    const router = useRouter()

    function fetchData(url, shallowURL) {
        axios.get(url)
            .then(function (response) {
                setData(response.data)
            })
            .catch(function (error) {
                setData(undefined)
                console.log(error);
            })

            router.push(`/?${shallowURL === undefined || shallowURL.length === 0 ? "" : shallowURL.join("&")}`, undefined, { shallow: true })
    }

    useEffect(() => {
        if (!data) {
            fetchData(URL)
        } else {
            let _url = URL
            let shallowUrl = []
            if (successLaunch !== undefined) {
                _url = `${_url}+&launch_success=${successLaunch.toLowerCase()}`
                shallowUrl.push(`launch=${successLaunch.toLowerCase()}`)
            }
            if (successLand !== undefined) {
                _url = `${_url}+&land_success=${successLand.toLowerCase()}`
                shallowUrl.push(`land=${successLand.toLowerCase()}`)
            }
            if (selectYear !== undefined) {
                _url = `${_url}+&launch_year=${selectYear}`
                shallowUrl.push(`year=${selectYear}`)
            }
            let newData = fetchData(_url, shallowUrl)
            setData(newData)
        }
    }, [successLaunch, successLand, selectYear])

    return (
        <div className="bg-gray-300 w-full h-full py-2 px-2">
            <div className="text-3xl font-bold px-2">
                SpaceX Launch Programs
            </div>
            <div className="master-con">
                <div className="col-container">
                    <div className="col-filter-con">
                        <Filter 
                        selectYear={selectYear}
                        setSelectYear={setSelectYear}
                        successLaunch={successLaunch}
                        setSuccessLaunch={setSuccessLaunch}
                        successLand={successLand}
                        setSuccessLand={setSuccessLand}
                        />
                    </div>
                    <div className="col-pl-con">
                        {data && (<ProgramList
                            data={data}
                        />)}
                    </div>
                </div>
                <div className="col-dev">
                    <p className="font-bold">Developed by :</p>
                    <p>Aakash Sharma</p>
                </div>
            </div>
        </div>
    )
}


export default HomeView