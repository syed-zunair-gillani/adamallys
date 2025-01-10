import { getNewsAndEvents } from '@/services'
import NewsAndEventDetailsTemplate from '@/templates/NewsAndEventDetails'

const NewsAndEventDetails = async () => {
    const data = await getNewsAndEvents()

    return (
        <>
            <NewsAndEventDetailsTemplate data={data?.data} />
        </>
    )
}

export default NewsAndEventDetails