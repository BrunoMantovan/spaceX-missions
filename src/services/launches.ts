import {type Doc, type APIResponseSpaceX} from "../types/api.ts";
import {type APIResponseSpaceXCrew} from "../types/crewApi.ts";
import {type PayloadDoc} from "../types/payloadsApi.ts";

export const getLaunches = async (page: number, limit: number, sort: string) => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: { date_utc: sort },
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

export const getCrew = async (limit: number, page: number = 1) => {
    const res = await fetch("https://api.spacexdata.com/v4/crew/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                limit,
                page,
            },
        }),
    });
    const data = JSON.stringify(await res.json());
    console.log(data);
    
    const {docs: crew} = await res.json() as APIResponseSpaceXCrew;
    return crew
}

export const getPayloads = async (id: string) => {
    const res = await fetch(`https://api.spacexdata.com/v4/payloads/${id}`);
    
    const payload = (await res.json()) as PayloadDoc;
    return payload;
}