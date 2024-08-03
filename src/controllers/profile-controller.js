import { createProfile, getProfiles, getProfileById, updateProfile } from '../models/profile-model.js';

export const newProfile = async (req, res) => {
    try {
        const profileData = req.body;
        const profile = await createProfile(profileData);
        return res.status(201).json(profile);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const fetchProfiles = async (req, res) => {
    try {
        const profiles = await getProfiles();
        return res.status(200).json(profiles);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const fetchProfileById = async (req, res) => {
    try {
        const profileId = parseInt(req.params.profileId);
        const profile = await getProfileById(profileId);
        return res.status(200).json(profile);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const editProfile = async (req, res) => {
    try {
        const profileId = parseInt(req.params.profileId);
        const profileData = req.body;
        const updatedProfile = await updateProfile(profileId, profileData);
        return res.status(200).json(updatedProfile);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
} 