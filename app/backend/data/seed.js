const prisma = require("../data/prismaClient");
async function main() {
    const customer = await prisma.user.upsert({
        where: { email: 'customer@zephyr.io' },
        update: {},
        create: {
            email: 'customer@zephyr.io',
            name: 'Earl John',
            password: 'pass123'
        },
    })
    const merchant = await prisma.user.upsert({
        where: { email: 'merchant@zephyr.io' },
        update: {},
        create: {
            email: 'merchant@zephyr.io',
            name: 'Omar Sterling',
            password: 'pass123'
        },
    })
    const customerRole = await prisma.role.upsert({
        where: { name: 'Customer' },
        update: {},
        create: {
            name: 'Customer',
        },
    })
    const merchantRole = await prisma.role.upsert({
        where: { name: 'Merchant' },
        update: {},
        create: {
            name: 'Merchant',
        },
    })

    console.log({ customer, merchant, customerRole, merchantRole })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })