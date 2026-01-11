import '../../envConfig'
import { getPayload } from 'payload'
import config from '@payload-config'
import data from '../../data/layout.json'
;(async () => {
    const payload = await getPayload({ config })

    const layout = await payload.updateGlobal({
        slug: 'layout',
        // @ts-expect-error: not typed
        data,
    })

    console.table({ ...layout, id: undefined })

    process.exit(0)
})()
