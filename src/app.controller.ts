import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('getuser/all')
  async getUser() {

    console.log(process.env.AWS_REGION)
    const alluser = await this.appService.getUser();
    if (!alluser) {
      return "failed"
    }
    else {
      return alluser
    }
  }

  @Post('create')
  async createUser(@Body() user: User) {
    const crtuser = await this.appService.createUser(user)
    if (!crtuser) {
      return "User not created"
    } else {
      return "user created";
    }
  }

  @Put('update/:email')
  async updateUser(@Param('email') email: string, @Body() user: User) {
    const updateuser = await this.appService.updateUser(email, user)
    if (!updateuser) {
      return "User not Updated"
    } else {
      return "user updated";
    }
  }

  @Get('getuser/:email')
  async getSpecificUser(@Param('email') email: string) {
    const speuser = await this.appService.getSpecficUser(email)
    if (!speuser) {
      return "Error"
    } else {
      return speuser;
    }
  }

  @Delete('delete/:email')
  async deleteUser(@Param('email') email: string) {
    const deleteuser = await this.appService.deleteUser(email)
    console.log(deleteuser)
    if (!deleteuser) {
      return "User not Deleted"
    } else {
      return "user Deleted";
    }
  }

}
