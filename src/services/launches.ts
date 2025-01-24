import {type Doc, type APIResponseSpaceX} from "../types/api.ts";

export const getLaunches = async (page: number, limit: number) => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: { date_unix: "asc" },
                limit: limit,
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
    return launchById
}

export const getTotalLaunches = async (limit: number) => {
        const resApi = await fetch("https://api.spacexdata.com/v5/launches");
        if (resApi.ok) {
            const launches = await resApi.json();
            return Math.ceil(launches.length / limit);
        }
    return null;
}
