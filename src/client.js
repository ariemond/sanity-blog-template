// Where we talk to Sanity

import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "589e4jzs",
    dataset: "production"
})