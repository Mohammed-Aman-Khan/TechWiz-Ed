import { showError } from './alerts'

const Cosmic = require('cosmicjs')()

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
            props: 'title,slug,content,metadata',
            limit: Infinity,
        })
        return data.objects
            .map(({ title, content, slug, metadata }) => ({
                title,
                content,
                slug,
                image: metadata.category_image.url,
            }))
    }
    catch (error) {
        showError(error.message)
        return null
    }
}

export const getProjectsForCategory = async (category) => {
    try {
        const data = await TechwizBucket.getObjects({
            query: {
                type: 'projects',
            },
            props: 'title,content,metadata',
            limit: Infinity,
        })
        console.log(data.objects)
        return data.objects
            .map(({ metadata, content }) => ({
                aboutProject: content,
                projectName: metadata.project_name,
                projectCategory: metadata.project_category,
                animation: metadata.animation_file.url,
                features: metadata.features,
                learning: metadata.learning,
            }))
            .filter(({ projectCategory }) => projectCategory === category)
    }
    catch (error) {
        showError(error.message)
        return null
    }
}