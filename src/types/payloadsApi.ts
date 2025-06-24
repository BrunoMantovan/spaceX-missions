
export type APIResponseSpaceXPayload = {
    docs:          PayloadDoc[];
    totalDocs:     number;
    offset:        number;
    limit:         number;
    totalPages:    number;
    page:          number;
    pagingCounter: number;
    hasPrevPage:   boolean;
    hasNextPage:   boolean;
    prevPage:      null;
    nextPage:      number;
}

export type PayloadDoc = {
    dragon:             Dragon;
    name:               string;
    type:               Type;
    reused:             boolean;
    launch:             string;
    customers:          string[];
    norad_ids:          number[];
    nationalities:      string[];
    manufacturers:      string[];
    mass_kg:            number | null;
    mass_lbs:           number | null;
    orbit:              Orbit;
    reference_system:   ReferenceSystem;
    regime:             Regime;
    longitude:          number | null;
    semi_major_axis_km: number | null;
    eccentricity:       number | null;
    periapsis_km:       number | null;
    apoapsis_km:        number | null;
    inclination_deg:    number | null;
    period_min:         number | null;
    lifespan_years:     number | null;
    epoch:              Date | null;
    mean_motion:        number | null;
    raan:               number | null;
    arg_of_pericenter:  number | null;
    mean_anomaly:       number | null;
    id:                 string;
}

export type Dragon = {
    capsule:           null | string;
    mass_returned_kg:  number | null;
    mass_returned_lbs: number | null;
    flight_time_sec:   number | null;
    manifest:          null | string;
    water_landing:     boolean | null;
    land_landing:      boolean | null;
}

export enum Orbit {
    Gto = "GTO",
    Iss = "ISS",
    Leo = "LEO",
    Po = "PO",
}

export enum ReferenceSystem {
    Geocentric = "geocentric",
}

export enum Regime {
    Geostationary = "geostationary",
    LowEarth = "low-earth",
}

export enum Type {
    Dragon10 = "Dragon 1.0",
    Dragon11 = "Dragon 1.1",
    DragonBoilerplate = "Dragon Boilerplate",
    Satellite = "Satellite",
}
