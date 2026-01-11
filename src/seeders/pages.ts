import '../../envConfig'
import { getPayload } from 'payload'
import config from '@payload-config'
import home from '../../data/pages/home.json'
import aboutUs from '../../data/pages/about-us.json'
import academics from '../../data/pages/academics.json'
import admissions from '../../data/pages/admissions.json'
import studentLife from '../../data/pages/student-life.json'
import mediaEvents from '../../data/pages/media-events.json'
import resources from '../../data/pages/resources.json'
import contactUs from '../../data/pages/contact-us.json'

const pages = [home, aboutUs, academics, admissions, studentLife, mediaEvents, resources, contactUs]

;(async () => {
    const payload = await getPayload({ config })

    for (const data of pages) {
        const page = await payload.create({
            collection: 'pages',
            // @ts-expect-error: error occurs because of unknown structure of JSON data
            data,
        })

        console.table({ ...page, id: undefined })
    }

    process.exit(0)
})()
