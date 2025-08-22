import type { Profile } from "../interfaces/Profile";

export function convertFullName(profile: Profile | null): string {
    if(!profile) {
        return ''
    }

    return `${profile.firstName} ${profile.lastName}`
}