// import { Injectable } from '@nestjs/common';
// import { User } from './user.dto';
// import { db, Table } from './db.config.js';
// @Injectable()
// export class AppService {
//   async getUser(): Promise<any> {
//     const params = {
//       TableName: Table,
//     }
//     try {
//       const { Items = [] } = await db.scan(params).promise()
//       console.log(Items)
//       return Items

//     } catch (error) {
//       console.log(error)
//       return false
//     }
//   }
//   async createUser(user: User): Promise<boolean> {
//     const params = {
//       TableName: Table,
//       Item: {
//       }
//     }

//     try {
//       console.log({params})
//       await db.put(params).promise()
//       return true
//     } catch (error) {
//       console.log(error)
//       return false
//     }

//   }
//   async updateUser(email: string, user: User): Promise<boolean> {
//     const params = {
//       TableName: Table,
//       Key: {
//         id: email
//       },
//       UpdateExpression:
//       'set #phone = :phone, #date = :date, #name = :name, #enroll=:enroll ,#email=:email,#id=:id ,#password=:password',
//     ExpressionAttributeValues: {
//       ":phone": user.phonenumber, ":date": user.date, ":name": user.name, ":enroll": user.enroll,":email":user.email,":id":user.id,":password":user.password,
//     },
//     ExpressionAttributeNames: {
//       "#id":"id",
//       "#ph": "phone",
//       "#date": "date",
//       "#name": "name",
//       "#enroll": "enroll",
//       "#email":"email",
//       "#password":"password",
//     }

//     }
//     // UpdateExpression = 'SET #ts = :val1',
//     //   ExpressionAttributeValues = {
//     //     ":val1": new_timestamp
//     //   },
//     //   ExpressionAttributeNames = {
//     //     "#ts": "timestamp"
//     //   }
//     try {
//       console.log(user)
//       await db.update(params).promise()
//       return true
//     } catch (error) {
//       console.log(error)
//       return false
//     }


//   }
//   async deleteUser(email: String): Promise<any> {
//     const params = {
//       TableName: Table,
//       Key: {
//         id: email
//       }
//     }

//     try {
//       await db.delete(params).promise()
//       return true

//     } catch (error) {
//       console.log(error)
//       return false
//     }
//   }

//   async getSpecficUser(email: String): Promise<any> {
//     const params = {
//       TableName: Table,
//       Key: {
//         id: email
//       }
//     }
//     try {
//       const Item = await db.get(params).promise()
//       console.log(Item)
//       return Item
//     } catch (error) {
//       console.log(error)
//       return error
//     }
//   }
// }
// import { Injectable } from '@nestjs/common';
// import { User } from './user.dto';
// import { db, Table } from './db.config.js';
// @Injectable()
// export class AppService {
//   async getUser(): Promise<any> {
//     const params = {
//       TableName: Table,
//     }
//     try {
//       const { Items = [] } = await db.scan(params).promise()
//       return Items

//     } catch (error) {
//       console.log(error)
//       return false
//     }
//   }
//   async createUser(user: User): Promise<boolean> {
//     const params = {
//       TableName: Table,
//       Item: user
//     }

//     try {
//       await db.put(params).promise()
//       return true
//     } catch (error) {
//       console.log(error)
//       return false
//     }

//   }
//   async updateUser(id: string, user: User): Promise<boolean> {
//     const params = {
//       TableName: Table,
//       Key: {
//         id: id
//       },
//       UpdateExpression:
//              'set #phone = :phone, #date = :date, #name = :name, #enroll=:enroll ,#email=:email,#id=:id ,#password=:password',
//           ExpressionAttributeValues: {
//            ":phone": user.phonenumber, ":date": user.date, ":name": user.name, ":enroll": user.enroll,":email":user.email,":id":user.id,":password":user.password,
//         },
//       ExpressionAttributeNames: {
//         "#ag": "age",
//         "#com": "company",
//         "#nam": "name",
//         "#sal": "salary",
//       }
//     }
//     // UpdateExpression = 'SET #ts = :val1',
//     //   ExpressionAttributeValues = {
//     //     ":val1": new_timestamp
//     //   },
//     //   ExpressionAttributeNames = {
//     //     "#ts": "timestamp"
//     //   }
//     try {
//       console.log(user)
//       await db.update(params).promise()
//       return true
//     } catch (error) {
//       console.log(error)
//       return false
//     }


//   }
//   async deleteUser(id: String): Promise<any> {
//     const params = {
//       TableName: Table,
//       Key: {
//         id: id
//       }
//     }

//     try {
//       await db.delete(params).promise()
//       return true

//     } catch (error) {
//       console.log(error)
//       return false
//     }
//   }

//   async getSpecficUser(id: String): Promise<any> {
//     const params = {
//       TableName: Table,
//       Key: {
//         id: id
//       }
//     }
//     try {
//       const Item = await db.get(params).promise()
//       console.log(Item)
//       return Item
//     } catch (error) {
//       console.log(error)
//       return error
//     }
//   }
// }
import { Injectable } from '@nestjs/common';
import { User } from './user.dto';
import { db, Table } from './db.config.js';
import { log } from 'console';
@Injectable()
export class AppService {
  async getUser(): Promise<any> {
    const params = {
      TableName: Table,
    }
    try {
      const { Items = [] } = await db.scan(params).promise()
      return Items

    } catch (error) {
      console.log(error)
      return false
    }
  }
  async createUser(user: User): Promise<boolean> {
    const params = {
      TableName: Table,
      Item: user
    }

    try {
      await db.put(params).promise()
      return true
    } catch (error) {
      console.log(error)
      return false
    }

  }
  async updateUser(email: string, user: User): Promise<boolean> {
    console.log("user ==>",{user})
    const params = {
      TableName: Table,
      Key: {
        id: email
      },
      UpdateExpression:
        'set #ph = :phone, #admin_dt = :admin_dt, #nam = :name, #enr=:enroll',
      ExpressionAttributeValues: {
        ":phone": user.phone, ":admin_dt": user.admin_dt, ":name": user.name, ":enroll": user.enroll,
      },
      ExpressionAttributeNames: {
        "#ph": "phone",
        "#admin_dt": "admin_dt",
        "#nam": "name",
        "#enr": "enroll",
      }
    }
    console.log(params)
    // UpdateExpression = 'SET #ts = :val1',
    //   ExpressionAttributeValues = {
    //     ":val1": new_timestamp
    //   },
    //   ExpressionAttributeNames = {
    //     "#ts": "timestamp"
    //   }
    try {
      // console.log(user)
      await db.update(params).promise()
      return true
    } catch (error) {
      console.log(error)
      return false
    }


  }
  async deleteUser(email: String): Promise<any> {
    const params = {
      TableName: Table,
      Key: {
        id: email
      }
    }

    try {
      await db.delete(params).promise()
      return true

    } catch (error) {
      console.log(error)
      return false
    }
  }

  async getSpecficUser(email: String): Promise<any> {
    const params = {
      TableName: Table,
      Key: {
        id: email
      }
    }
    try {
      const Item = await db.get(params).promise()
      console.log(Item)
      return Item
    } catch (error) {
      console.log(error)
      return error
    }
  }
}