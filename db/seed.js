import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data.js";


async function main() {
   const prisma = new PrismaClient();

    await prisma.product.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();

    await prisma.product.createMany( { data: sampleData.products } );
    await prisma.user.createMany( { data: sampleData.users } );

    console.log('Database seeded successfully')
   
}

main()
  // .catch((e) => {
  //   console.error(e);
  //   process.exit(1);
  // })
  // .finally(async () => {
  //   await prisma.$disconnect();
  // });

  


//   import { PrismaClient } from "@prisma/client";
// import sampleData from "./sample-data.js";

//   const prisma = new PrismaClient();

// async function main() {


    
//     await prisma.product.deleteMany();
//     await prisma.product.createMany( { data: sampleData.products,skipDuplicates: true,   } );

//     console.log('Database seeded successfully')
   
// }

// main()
  

