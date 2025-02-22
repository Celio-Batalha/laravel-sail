import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {

    const box = children[0].props.title

    console.log(children)
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div>
                {/* <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link> */}
            </div>

            <div className="w-full sm:max-w-md mt-0 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <div className="flex flex-row px-6 py-4 bg-blue-700 w-full justify-between font-bold text-white">
                    <span>icon</span>
                    <span>{box}</span>
                </div>
                <div className="px-6 py-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
