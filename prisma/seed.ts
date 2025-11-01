import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.blogPost.createMany({
    data: [
      {
        title: 'Modern Concrete Driveways',
        slug: 'modern-concrete-driveways',
        imageUrl: '/images/blog1.jpg',
        description: 'Complete guide to concrete driveways.',
        content: 'Full content here...'
      },
      {
        title: 'Exposed Aggregate Pathways',
        slug: 'exposed-aggregate-pathways',
        imageUrl: '/images/blog2.jpg',
        description: 'Why exposed aggregate is great.',
        content: 'Full content here...'
      }
    ]
  })

  console.log('Seed complete!')
}

main()
  .finally(() => prisma.$disconnect())