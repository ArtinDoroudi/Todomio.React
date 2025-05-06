
export default function Dashboard() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-4 text-lg">Welcome to your dashboard!</p>
        <div className="mt-8">
            <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            View Profile
            </button>
        </div>
        </div>
    )
}
