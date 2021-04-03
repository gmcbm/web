import { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function Navigation() {
    const [isOpenProfile, setIsOpenProfile] = useState(false)
    const [isOpenNav, setIsOpenNav] = useState(false)

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/">
                                <img className="h-20 w-20"
                                     src="https://cdn.gmcbm.net/img/logo/GMCBM_TRANSPARENT.svg" alt="GMCBM Logo" />
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <Link href="#"><a
                                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a></Link>

                                <Link href="#"><a
                                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a></Link>

                                <Link href="#"><a
                                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a></Link>

                                <Link href="#"><a
                                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a></Link>

                                <Link href="#"><a
                                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a></Link>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        {/* Not LoggedIn */}
                        <div className="ml-4 flex items-center md:ml-6">
                            <Link href="/login"><a
                               className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a></Link>
                        </div>
                        {/* End Not LoggedIn */}

                        {/* LoggedIn */}
                        <div className="ml-4 flex items-center md:ml-6 hidden">
                            <button
                                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>

                                {/* Heroicon name: outline/bell */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                                </svg>
                            </button>

                            {/* Profile dropdown */}
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" onClick={() => setIsOpenProfile(!isOpenProfile)}
                                            className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                            id="user-menu" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full"
                                             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                             alt="" />
                                    </button>
                                </div>
                                <Transition
                                    show={isOpenProfile}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    {(ref) => (
                                        <div ref={ref}  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                             role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                            <Link href="#"><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                               role="menuitem">Your Profile</a></Link>

                                            <Link href="#"><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                               role="menuitem">Settings</a></Link>

                                            <Link href="#"><a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                               role="menuitem">Sign out</a></Link>
                                        </div>
                                    )}
                                </Transition>
                            </div>
                        </div>
                        {/* End LoggedIn */}
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <button type="button" onClick={() => setIsOpenNav(!isOpenNav)}
                                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            {/* Heroicon name: outline/menu */}
                            <svg className={`${isOpenNav ? 'hidden' : 'block'}  h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>

                            {/* Heroicon name: outline/x */}
                            <svg className={`${isOpenNav ? 'block' : 'hidden'}  h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`${isOpenNav ? '' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="#"><a
                       className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a></Link>

                    <Link href="#"><a
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a></Link>

                    <Link href="#"><a
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a></Link>

                    <Link href="#"><a
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a></Link>

                    <Link href="#"><a
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a></Link>
                </div>

                {/* Not LoggedIn */}
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
                    <Link href="/login"><a
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</a></Link>
                </div>
                {/* End Not LoggedIn */}

                {/* LoggedIn */}
                <div className="pt-4 pb-3 border-t border-gray-700 hidden">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full"
                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                 alt="" />
                        </div>
                        <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                        </div>
                        <button
                            className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">View notifications</span>

                            {/* Heroicon name: outline/bell */}
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                        </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                        <Link href="#"><a
                           className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your
                            Profile</a></Link>

                        <Link href="#"><a
                           className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a></Link>

                        <Link href="#"><a
                           className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign
                            out</a></Link>
                    </div>
                </div>
                {/* End LoggedIn */}
            </div>
        </nav>
    )
}