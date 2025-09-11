import dynamicImport from 'next/dynamic'
import notfound from '../../../public/not-found.json'

const LottieRenderer = dynamicImport(() => import('@/components/blocks/lottie'), {
    ssr: true,
    loading: () => <div className="w-48 h-48" />,
})

export default async function NotFound() {
    return (
        <main className="flex-1 container text-center flex flex-col items-center justify-center py-8">
            <LottieRenderer
                animationData={notfound}
                loop={true}
                className={'w-full max-w-xl mb-6'}
            />
            <h2 className="font-black text-4xl mb-4">{'Page Not Found (404)'}</h2>
            <p className="mb-8 max-w-2xl mx-auto">
                {
                    'We’re sorry, but the page you are trying to access cannot be found. It may have been moved to a new location, removed from our site, or the link you followed may be incorrect.'
                }
            </p>
        </main>
    )
}
