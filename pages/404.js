import Link from 'next/link'
import MainLayout from "../src/layouts/mainlayout";
import { useEffect } from "react";

export default function FourOhFour() {

    // Change the title of the page
    useEffect(() => {
        document.title = "404 - Chatweather"
    } , [])


    return <>
        <MainLayout>
            <div>
                <p className="text-center pt-10 text-2xl font-bold">404 - Page not found</p>
                <div className="flex pt-2">
                    <div className="inline-block bg-blue-600 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 mx-auto">
                        <Link href="/">
                            <a>Go to the home page</a>
                        </Link>
                    </div>
                </div>
            </div>
        </MainLayout>
    </>
}