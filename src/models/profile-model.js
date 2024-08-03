import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProfile = async (profileData) => {
    try {
        const newProfile = await prisma.profile.create({
            data: {
                name: profileData.name,
            },
        });
        return newProfile;
    } catch (error) {
        throw new Error(`Error creating profile: ${error.message}`);
    }
}

export const getProfiles = async () => { 
    try {
        const profiles = await prisma.profile.findMany();
        return profiles;
    } catch (error) { 
        throw new Error(`Error fetching profiles: ${error.message}`);
    } 
}

export const getProfileById = async (profileId) => {
    try {
        const profile = await prisma.profile.findUnique({
            where: {
                id: profileId,
            },
        });
        return profile;
    } catch (error) {
        throw new Error(`Error fetching profile: ${error.message}`);
    }
}

export const updateProfile = async (profileId, profileData) => {
    try {
        const updatedProfile = await prisma.profile.update({
            where: {
                id: profileId,
            },
            data: {
                name: profileData,
            },
        });
    } catch (error) {
        throw new Error(`Error updating profile: ${error.message}`);
    }

}
