import MainLayout from "../../src/layouts/mainlayout";
import { useEffect } from "react";
import { Tab } from '@headlessui/react'

export default function Usage() {
    // Change the title of the page
    useEffect(() => {
        document.title = "Usage - Chatweather"
    } , [])

    return (
        <MainLayout>
            <div className="relative bg-gray-50 overflow-hidden">
                <div className="relative pt-6 pb-16 sm:pb-24">
                    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                        <div className="text-center">

                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Usage</span>
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                Setting up the Chatweather command is simple.
                            </p>
                        </div>
                    </main>
                </div>
            </div>

            <div className="bg-gray-100 text-gray-800 px-4 py-10">

                <Tabs></Tabs>

            </div>

        </MainLayout>
    )
}

function Tabs() {
    const host = process.env.HOST


    return (
        <div>
            <Tab.Group>
                <Tab.List className="grid grid-cols-3 bg-gray-50 rounded-lg space-x-2 max-w-lg p-1">
                    <Tab>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-blue-500 text-white rounded-lg py-2 w-full' : 'text-black'
                                }
                            >
                                Using Nightbot
                            </button>
                        )}
                    </Tab>
                    <Tab>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-blue-500 text-white rounded-lg py-2 w-full' : 'text-black'
                                }
                            >
                                Using Other Bots
                            </button>
                        )}
                    </Tab>
                    <Tab>
                        {({ selected }) => (
                            <button
                                className={
                                    selected ? 'bg-blue-500 text-white rounded-lg py-2 w-full' : 'text-black'
                                }
                            >
                                Using Json
                            </button>
                        )}
                    </Tab>
                </Tab.List>

                <Tab.Panels className="mt-5 bg-white p-2 w-full rounded-md prose">
                    <Tab.Panel>
                        <h2>Using Nightbot</h2>
                        <p>Chatweather on nightbot is super simple. You just need to add a chat command</p>
                        <p>
                            <code>
                                Command: !weather <br />

                                URL: https://example.com/api/weather?zip=12345<br />
                            </code>
                        </p>
                        <p>
                            If you want to make it also say your name, you can add a second parameter to the command named username. <br/>
                        </p>
                        <p>
                            <code>
                                Command: !weather <br />

                                URL: {host}/api/weather?zip=12345&username=TheECGaming<br />
                            </code>
                        </p>
                    </Tab.Panel>

                    <Tab.Panel>
                        I haven{'\''}t created this part in the usage yet.
                    </Tab.Panel>

                    <Tab.Panel>
                        I haven{'\''}t created this part in the usage yet.
                    </Tab.Panel>

                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}