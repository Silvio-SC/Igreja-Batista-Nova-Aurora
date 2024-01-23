export const ActivityCard = ({children}: any) => {
    return(
        <li className="border-indigo-900 rounded py-1 px-3 border 
            hover:text-gray-100 hover:bg-emerald-500 hover:border-emerald-500
            duration-300 xl:text-xl">
            {children}
        </li>
    )
}