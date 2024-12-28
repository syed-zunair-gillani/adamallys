import { Axios } from "@/config/Axios";
import PortsTemplates from "@/templates/ports"
import qs from "qs"
import React from 'react'

async function getPorts() {
    const params = qs.stringify({
        populate: [
            'UAE_Ports.Image', "Oman.Image"
        ],
    })
    const res = await fetch(`${process.env.BACKEND_PUBLIC_BASE_URL}/api/port?${params}`)
    const ports = await res.json()
    return {ports : ports.data}
}


const page = async () => {
    const { ports } = await getPorts()
    return (
        <PortsTemplates ports={ports}/>
    )
}

export default page