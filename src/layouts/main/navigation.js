import Link from "next/link";

const navigation = [
    { name: 'Features', href: '/features' },
    { name: 'Usage', href: '/usage' },
    { name: 'Donate', href: '/donate' },
]

export default function Navigation() {
    return (
        <header className="bg-blue-600">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-blue-500 lg:border-none">
                    <div className="flex items-center">
                        <Link href="/">
                            <span className="text-white text-2xl">Chatweather</span>

                        </Link>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {navigation.map((link) => (
                                <Link key={link.name} href={link.href} className="text-base font-medium text-white hover:text-blue-50">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        <a
                            href="https://app.netlify.com/start/deploy?repository=https://github.com/elijahcruz12/chatweather"
                            className="inline-block bg-cyan-100 py-2 px-4 border border-transparent rounded-md text-base font-medium text-cyan-600 hover:bg-opacity-75" target="_blank"
                        >
                            <div className="flex items-center">
                                <img src="/icons/netlify.svg" alt="netlify" className="w-6 h-6" />

                                Deploy to Netlify
                            </div>
                        </a>
                        <a
                            href="https://github.com/elijahcruz12/chatweather"
                            className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-600 hover:bg-opacity-75" target="_blank">

                            <div className="flex items-center">
                                <img src="/icons/github.svg" alt="github" className="w-6 h-6" />

                                View On GitHub
                            </div>
                        </a>
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {navigation.map((link) => (
                        <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}
