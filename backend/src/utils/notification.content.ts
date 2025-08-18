export const notifyFriendInvitationContent = (userName: string): string => {
  return `You have a new friend request from ${userName}`
}

export const notifyNewMessageContent = (userName: string): string => {
  return `You’ve got a new message from ${userName}. Please check your inbox.`
}

export const notifyAcceptedFriendInvitation = (receiverName: string) => {
  return `${receiverName} accepted your friend invitation!`
}
