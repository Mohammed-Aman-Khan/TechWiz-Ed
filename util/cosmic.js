import toast from 'react-hot-toast'

const Cosmic = require('cosmicjs')()

// const Cosmic = cosmic()

const TechwizBucket = Cosmic.bucket({
    slug: 'techwiz-ed-production',
    read_key: 'afk6J69DRDtUhBj8yJhA6shKdq6LYiHMXBcJw2DiZYFJecR8Fx',
})

export const getProjectCategories = async () => {
    try {
        const data = await TechwizBucket.getObjects({
            query: {
                type: 'project-categories'
            },
            props: 'title,content,metadata',
            limit: 20
        })
        return data.objects
            .map(({ title, content, metadata }) => ({
                title,
                content,
                image: metadata.category_image.url,
            }))
    }
    catch (error) {
        toast.error(error.message)
        return null
    }
}