const fs = require('fs')
const path = require('path')


const postsJsonPath = path.resolve(__dirname, '../../posts.json')

const blogPostsDir = path.resolve(__dirname, '../../blogposts')

try {
    const postsData = JSON.parse(fs.readFileSync(postsJsonPath, 'utf8'))

    let hasErrors = false

    postsData.posts.forEach((post) => {
        const folderPath = path.join(blogPostsDir, post.folder)
        const postMdPath = path.join(folderPath, 'post.md')
        const coverImagePath = path.join(folderPath, post.cover_image)
        const avatarImagePath = path.join(folderPath, post.author.avatar)

        console.log(`Validating post: ${post.title}`)


        if (!fs.existsSync(folderPath)) {
            console.error(`❌ Folder not found: ${post.folder}`)
            hasErrors = true
        }


        if (!fs.existsSync(postMdPath)) {
            console.error(`❌ post.md not found in folder: ${post.folder}`)
            hasErrors = true
        }


        if (!fs.existsSync(coverImagePath)) {
            console.error(`❌ Cover image not found: ${post.cover_image} in folder: ${post.folder}`)
            hasErrors = true
        }

        if (!fs.existsSync(avatarImagePath)) {
            console.error(`❌ Avatar image not found: ${post.author.avatar} in folder: ${post.folder}`)
            hasErrors = true
        }
    })

    if (hasErrors) {
        console.error('❌ Validation failed. Please fix the above issues.')
        process.exit(1) 
    } else {
        console.log('✅ All files validated successfully!')
    }
} catch (error) {
    console.error('❌ Error reading or validating posts.json:', error.message)
    process.exit(1)
}
