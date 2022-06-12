import MainLayout from "../src/layouts/mainlayout";
import { useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Typing from "react-typing-animation/dist/Typing";
import YoureHereModal from "../components/YourHereModal";
import Link from "next/link"

export default function Home() {

  // Change the title of the page
    useEffect(() => {
        document.title = "Home - Chatweather"
    } , [])

  return (
      <MainLayout>

          <div className="relative bg-gray-50 overflow-hidden">

              <div className="relative pt-6 pb-16 sm:pb-24">

                  <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                      <div className="text-center">
                          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                              <span className="block xl:inline">The Chat App For</span>{' '}
                              <span className="block text-blue-600 xl:inline">Your <Typing speed={200} loop={true}>
                                  <span className="text-purple-700">Twitch</span>
                                  <Typing.Delay ms={500} />
                                  <Typing.Backspace count={10} />
                                  <span className="text-red-700">Youtube</span>
                                  <Typing.Delay ms={500} />
                                <Typing.Backspace count={10} />
                                  <span className="text-blue-800">Mixer</span>
                                  <Typing.Delay ms={500} />
                                    <Typing.Backspace count={10} />
                              </Typing> Chat</span>
                          </h1>
                          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                              Welcome to Chatweather, a weather chat command for Twitch, Youtube, and Mixer. Used via nightbot or other chat bots, this app will display the current weather for the location of the streamer.
                          </p>
                          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                              <Link href="/usage">
                                  <button
                                      type="button"
                                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                      Get Started
                                  </button>
                              </Link>
                              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                  <YoureHereModal />
                              </div>
                          </div>
                      </div>
                  </main>
              </div>
          </div>


      </MainLayout>
  )

}
