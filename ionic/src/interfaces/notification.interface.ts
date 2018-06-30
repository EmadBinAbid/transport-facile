export interface Notification 
{
    post: {
        _id: string,
        adminId: string,
        earlyService: boolean,
        lateService: boolean,
        event: string,
        earlyTime: string,
        lateTime: string,
        createdOn: string,
    }[]
}