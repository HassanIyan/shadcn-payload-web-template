import '../../envConfig'
import { getPayload } from 'payload'
import config from '@payload-config'
import data from '../../data/theme.json'
;(async () => {
    const payload = await getPayload({ config })

    const theme = await payload.updateGlobal({
        slug: 'theme',
        data,
    })

    console.table({ ...theme, id: undefined })

    process.exit(0)
})()
