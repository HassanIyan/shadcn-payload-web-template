import { getPayload } from 'payload'
import config from '@payload-config'
import data from '../../data/meta.json'
;(async () => {
    const payload = await getPayload({ config })

    const layout = await payload.updateGlobal({
        slug: 'layout',
        data,
    })

    console.table({ ...layout, id: undefined })

    process.exit(0)
})()
