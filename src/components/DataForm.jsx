import { PlusCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addData } from '../redux/tableSlice'

const DataForm = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        dispatch(addData(data))
        reset()
    }

    const inputClasses = "mt-1 block w-full rounded-lg border-gray-300 dark:border-slate-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white sm:text-sm py-2 px-3 transition-colors duration-200"
    const labelClasses = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    const errorClasses = "text-red-500 text-xs mt-1 ml-1"

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-slate-700 pb-4">
                <PlusCircle className="text-indigo-600 dark:text-indigo-400" size={24} />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Add New Entry</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Name */}
                <div>
                    <label className={labelClasses}>Name</label>
                    <input
                        {...register('name', { required: 'Name is required' })}
                        className={inputClasses}
                        placeholder="John Doe"
                    />
                    {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className={labelClasses}>Email</label>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        className={inputClasses}
                        placeholder="john@example.com"
                    />
                    {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>

                {/* Role */}
                <div>
                    <label className={labelClasses}>Role</label>
                    <select
                        {...register('role', { required: 'Role is required' })}
                        className={inputClasses}
                    >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Editor">Editor</option>
                        <option value="Viewer">Viewer</option>
                    </select>
                    {errors.role && <p className={errorClasses}>{errors.role.message}</p>}
                </div>

                {/* Status */}
                <div>
                    <label className={labelClasses}>Status</label>
                    <select
                        {...register('status', { required: 'Status is required' })}
                        className={inputClasses}
                    >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    {errors.status && <p className={errorClasses}>{errors.status.message}</p>}
                </div>

                {/* Date */}
                <div>
                    <label className={labelClasses}>Date</label>
                    <input
                        type="date"
                        {...register('date', { required: 'Date is required' })}
                        className={inputClasses}
                    />
                    {errors.date && <p className={errorClasses}>{errors.date.message}</p>}
                </div>

                <div className="md:col-span-2 lg:col-span-1 flex items-end">
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-md text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 h-[38px] mt-1"
                    >
                        Add Entry
                    </button>
                </div>
            </form>
        </div>
    )
}

export default DataForm
