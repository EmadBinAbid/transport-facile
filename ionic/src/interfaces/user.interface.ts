export interface User 
{
    user: {
        _id: string,
        firstName: string,
        lastName: string,
        studentId: string,
        email: string,
        batch: string,
        contactNumber: string,
        dropoffPoint: string,
        password: string
    },
    token: string
}