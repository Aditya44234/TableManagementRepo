import { Download, Search } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import * as XLSX from 'xlsx'
import { selectFilteredData, setFilter } from '../redux/tableSlice'

const TableControls = () => {
    const dispatch = useDispatch()
    const filteredData = useSelector(selectFilteredData)
    const { filter } = useSelector((state) => state.table)

    const handleDownload = () => {
        const ws = XLSX.utils.json_to_sheet(filteredData)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Data')
        XLSX.writeFile(wb, 'table_data.xlsx')
    }

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <div className="relative w-full sm:w-72">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                    type="text"
                    placeholder="Search records..."
                    value={filter}
                    onChange={(e) => dispatch(setFilter(e.target.value))}
                    className="block w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-lg leading-5 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 sm:text-sm shadow-sm"
                />
            </div>

            <button
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
                <Download className="mr-2 h-4 w-4" />
                Export to Excel
            </button>
        </div>
    )
}

export default TableControls
