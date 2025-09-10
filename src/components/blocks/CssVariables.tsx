import { getPayload } from 'payload'
import config from '@payload-config'
import { CssVariablesClient } from '@/app/(frontend)/registry'

const CssVariables = async () => {
    const payload = await getPayload({ config })
    const theme = await payload.findGlobal({ slug: 'theme' })
    return <CssVariablesClient colors={theme} />
}

export default CssVariables
