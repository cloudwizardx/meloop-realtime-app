import type { Profile } from "../interfaces/Profile"

export function convertFullName(profile: Profile | null): string {
    if(!profile) {
        return ''
    }

    return `${profile.firstName} ${profile.lastName}`
}

export function getTimeAgo(createdAt: Date): string {
  const now = new Date()
  
  if (createdAt > now) {
    return "In the future"
  }
  
  const diffInMs = now.getTime() - createdAt.getTime()
  
  const yearsDiff = now.getFullYear() - createdAt.getFullYear()
  const monthsDiff = now.getMonth() - createdAt.getMonth()
  const daysDiff = now.getDate() - createdAt.getDate()
  
  let totalMonths = yearsDiff * 12 + monthsDiff
  if (daysDiff < 0) {
    totalMonths--
  }
  
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  
  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} year ago`
  }
  
  if (months > 0) {
    return months === 1 ? "1 month ago" : `${months} month ago`
  }
  
  const seconds = Math.floor(diffInMs / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  
  if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} day ago`
  }
  
  if (hours > 0) {
    return hours === 1 ? "1 hour ago" : `${hours} hour ago`
  }
  
  if (minutes > 0) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minute ago`
  }
  
  if (seconds > 5) {
    return `${seconds} second ago`
  }
  
  return "Done with"
}

export function getAmountLength(l: number): string {
  return l >= 99 ? '99+': l.toString()
}