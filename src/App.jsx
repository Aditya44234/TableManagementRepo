import DataForm from './components/DataForm'
import Table from './components/Table'
import TableControls from './components/TableControls'
import ThemeToggle from './components/ThemeToggle'

function App() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                        React Table App
                    </h1>
                    <ThemeToggle />
                </div>

                <div className="space-y-6">
                    <DataForm />
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-slate-700 transition-colors duration-300">
                        <div className="p-6">
                            <TableControls />
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
