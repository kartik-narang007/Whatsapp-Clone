import { PrismaClient } from "@prisma/client";

let prismaInstance = null;


function getPrimsaInstance(){
    if(!prismaInstance){
        prismaInstance = new PrismaClient();
    }
    return prismaInstance;
}

export default getPrimsaInstance;