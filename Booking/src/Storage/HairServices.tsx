

export interface ServiceData {
    Id: number,
    Category: string,
    Service: string,
    Price: number,
    image?: string
}

export interface HairServicesData {
    [key: string]: ServiceData;
}

export const hairServices: HairServicesData = {
            
            "haircuts1":{
            Id: 1,
            Category: "Haircuts",
            Service: "Hairstyle",
            Price: 70,
            image: "vd"
            },
            "haircuts2":{
            Id: 2,
            Category: "Haircuts",
            Service: "Hairstyle",
            Price: 80,
            image: "vd"
            },
            "haircuts3":{
            Id: 3,
            Category: "Haircuts",
            Service: "Hairstyle",
            Price: 100,
            image: "vd"
            },
            "weaves1":{
            Id: 4,
            Category: "Weaves",
            Service: "Weaves",
            Price: 90,
            image: "vd"
            }, 
            "weaves2":{
            Id: 5,
            Category: "Weaves",
            Service: "Weaves",
            Price: 70,
            image: "vd"
            },
            "spa1":{
            Id: 6,
            Category: "Spa",
            Service: "Spa",
            Price: 70,
            image: "vd"
            },
            "spa2":{
            Id: 7,
            Category: "Spa",
            Service: "Pedicure",
            Price: 70,
            image: "vd"
            }
    };
