import '../../envConfig'
import { getPayload } from 'payload'
import config from '@payload-config'
import data from '../../data/meta.json'
;(async () => {
    const payload = await getPayload({ config })

    const meta = await payload.updateGlobal({
        slug: 'metadata',
        data,
    })

    console.table({ ...meta, id: undefined })

    process.exit(0)
})()
