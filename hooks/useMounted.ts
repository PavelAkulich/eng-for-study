import { app } from "@/firebase/config";
import { User, getAuth } from "firebase/auth";
import { useEffect, useState } from "react"

export const useMounted = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false);
    }, [])
    return {loading}
}