export class ResourceNotFoundException extends Error {
    public statusCode: number = 404

    constructor(message: string) {
        super(message)
        
    }
}