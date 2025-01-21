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
    try {
        const resServer = await fetch(`http://localhost:8080/paginated-data?limit=${limit}`);
        if (resServer.ok) {
            const data = await resServer.json();
            return data.totalPages;
        }
    } catch (e) {
        console.error("Error fetching from server, falling back to API:", e);
    }

    try {
        const resApi = await fetch("https://api.spacexdata.com/v5/launches");
        if (resApi.ok) {
            const launches = await resApi.json();
            return Math.ceil(launches.length / limit);
        }
    } catch (e) {
        console.error("Error fetching from SpaceX API:", e);
    }

    console.error("Both the server and SpaceX API failed.");
    return null;
}
