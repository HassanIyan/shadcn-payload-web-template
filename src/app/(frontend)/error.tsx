'use client'

import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className="flex-1 container text-center flex flex-col items-center justify-center py-8">
            <AlertTriangle className="w-16 h-16 text-red-500 mb-6" />

            <h2 className="font-black text-4xl mb-4">{'Something went wrong!'}</h2>

            <p className="mb-6 max-w-2xl mx-auto text-lg text-muted-foreground">
                {
                    'An unexpected issue occurred while processing your request. This may be due to invalid input, expired session data, or a temporary system error.'
                }
            </p>

            <div className="bg-muted rounded-2xl p-4 max-w-xl text-left shadow-md w-full mb-6">
                <h3 className="font-semibold mb-2 text-red-600">Error Details:</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {error.message || 'No additional information is available.'}
                </p>
                {error.digest && (
                    <p className="mt-2 text-xs text-muted-foreground">
                        <strong>Reference Code:</strong> {error.digest}
                    </p>
                )}
            </div>

            <p className="mb-8 max-w-2xl mx-auto text-sm text-muted-foreground">
                {
                    'You can try the action again. If the problem persists, please contact support and provide the reference code above so we can assist you more effectively.'
                }
            </p>

            <Button onClick={() => reset()} size="lg">
                {'Try Again'}
            </Button>
        </main>
    )
}
