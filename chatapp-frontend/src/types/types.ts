export type Friend = {
    userId: number,
    firstName: string,
    lastName?: string, //TODO:
}

export type Message = {
    text: string,
    dateReceived?: Date //TODO:
}


export type FriendListPreview = {
    userId: number,
    firstName: string,
    lastName?: string, //TODO:
    message: Message
}
