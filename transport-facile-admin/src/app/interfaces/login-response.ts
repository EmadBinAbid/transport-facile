export interface LoginResponse {
    admin: {
        _id: string,
        firstName: string,
        lastName: string,
        adminId: string,
        email: string,
        designation: string,
        contactNumber: string,
        password: string
    },
    token: string;
}
