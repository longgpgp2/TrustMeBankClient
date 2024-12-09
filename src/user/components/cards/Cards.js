export default function Cards() {
    return (
        <div class="max-w-7xl mx-auto p-4">
            <div class="mt-8 bg-white rounded-lg shadow p-6">
                <h2 class="text-2xl font-bold text-blue-600">
                    Your Banking Cards
                </h2>
                <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="bg-blue-500 text-white rounded-lg shadow p-4">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-semibold">
                                Visa
                            </h3>
                            <img alt="Visa logo" class="w-12 h-8" height="30" src="https://storage.googleapis.com/a1aa/image/fKs3pgRbGqRdaaO3wglyRxOCVfImE1b0auR3ut20GxgTvM5TA.jpg" width="50" />
                        </div>
                        <div class="mt-4">
                            <p class="text-lg">
                                **** **** **** 1234
                            </p>
                            <p class="mt-2">
                                John Laboune
                            </p>
                            <p class="mt-2">
                                Exp: 12/24
                            </p>
                        </div>
                    </div>
                    <div class="bg-green-500 text-white rounded-lg shadow p-4">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-semibold">
                                MasterCard
                            </h3>
                            <img alt="MasterCard logo" class="w-12 h-8" height="30" src="https://storage.googleapis.com/a1aa/image/fZIKXZBtXYRMZCJteosYkVaTyOWwCUfT4JPeX8WdePN06lJfE.jpg" width="50" />
                        </div>
                        <div class="mt-4">
                            <p class="text-lg">
                                **** **** **** 5678
                            </p>
                            <p class="mt-2">
                                John Laboune
                            </p>
                            <p class="mt-2">
                                Exp: 11/23
                            </p>
                        </div>
                    </div>
                    <div class="bg-red-500 text-white rounded-lg shadow p-4">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-semibold">
                                American Express
                            </h3>
                            <img alt="American Express logo" class="w-12 h-8" height="30" src="https://storage.googleapis.com/a1aa/image/IGbp1SNeqVxehEbu3hGRzf3mQdl9fSyjwvozflZemH2X1LTeJA.jpg" width="50" />
                        </div>
                        <div class="mt-4">
                            <p class="text-lg">
                                **** **** **** 9012
                            </p>
                            <p class="mt-2">
                                John Laboune
                            </p>
                            <p class="mt-2">
                                Exp: 10/25
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}