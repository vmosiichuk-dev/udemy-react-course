import { useState, useCallback } from "react"

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(
    async (url, data) => {
        console.log(url, data)
        setLoading(true)

        try {
            const response = await fetch(url, data)

            if (!response.ok) throw new Error(`Could not fetch ${url}, status: ${response.status}`)

            const result = await response.json()

            setLoading(false)

            return result
        } catch(e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, request, error, clearError }
}