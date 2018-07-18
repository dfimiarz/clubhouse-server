export default class TokenPayload{

    public username: string
    public id: string
    public roleId: number

    constructor(username: string,id: string, roleId: number){
        this.username = username
        this.roleId = roleId
        this.id = id
    }

}