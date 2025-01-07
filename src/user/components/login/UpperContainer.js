export default function UpperContainer({ children }) {
    return (
        <>
            <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                        alt="Trust me logo"
                        className="w-full h-full object-contain"
                        src="https://st2.depositphotos.com/5266903/8111/i/450/depositphotos_81115916-stock-photo-bank-flat-cobalt-and-cyan.jpg"
                    />
                </div>
                <span className="text-2xl font-bold text-indigo-600">Trust Me</span>
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center">{children}</h2>
        </>
    )

}
