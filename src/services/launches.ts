import {type Doc, type APIResponseSpaceX} from "../types/api.ts";

export const getLaunches = async (page: number) => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: { date_unix: "asc" },
                limit: 12,
                page: page,
            },
        }),
    })
    const {docs: launches} = await res.json() as APIResponseSpaceX;    
    return launches
}

export const getLaunchById = async ({id}: {id:string}) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
    const launchById = (await res.json()) as Doc;
    console.log(launchById)
    return launchById
}

