import { ApiProperty } from "@nestjs/swagger";


export class User {
    @ApiProperty()
    id: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    phone: number;
    @ApiProperty()
    admin_dt: string;
    @ApiProperty()
    enroll: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    password: string;
}