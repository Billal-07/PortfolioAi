'use client'

export default function signIn() {
    const handleSubmit = async ( event : any ) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-normal">
                    Welcome Back To <span className="text-purple-800">Portfolio AI</span>
                </h1>
            </div>

            {/* Form Container */}
            <div className="w-full max-w-sm bg-[#01003b76] border-2 border-gray-700 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <p className="text-gray-400 mb-6 text-[14px] font-semibold">
                    Enter your email below to Login
                </p>

                {/* Social Login */}
                <div className="flex justify-between gap-4 mb-6">
                    <button className="flex items-center justify-center w-1/2 py-2 bg-transparent border-2 border-gray-700 text-white rounded-md hover:bg-purple-600 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C6.476 2 2 6.476 2 12c0 4.991 3.657 9.128 8.438 9.876v-6.99h-2.54v-2.885h2.54v-2.173c0-2.514 1.493-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.474h-1.26c-1.242 0-1.63.774-1.63 1.563v1.931h2.773l-.443 2.885h-2.33v6.99C18.343 21.128 22 16.991 22 12c0-5.524-4.477-10-10-10z" />
                        </svg>
                        GitHub
                    </button>
                    <button className="flex items-center justify-center w-1/2 py-2 bg-transparent border-2 border-gray-700 text-white rounded-md hover:bg-purple-600 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23.994 12.297c0-.765-.066-1.515-.189-2.245H12.204v4.257h6.661a5.689 5.689 0 01-2.454 3.731v3.1h3.96c2.319-2.13 3.653-5.271 3.653-8.843z" />
                            <path d="M12.204 24c3.304 0 6.077-1.092 8.11-2.961l-3.96-3.101c-1.101.741-2.521 1.176-4.15 1.176-3.182 0-5.88-2.149-6.85-5.036H1.217v3.164A11.998 11.998 0 0012.204 24z" />
                            <path d="M5.354 14.078a7.173 7.173 0 01-.36-2.316c0-.804.131-1.584.36-2.316V6.281H1.217A11.998 11.998 0 000 12c0 1.915.457 3.727 1.217 5.419l4.137-3.34z" />
                            <path d="M12.204 4.8c1.798 0 3.415.616 4.686 1.825l3.514-3.514C17.34 1.093 14.567 0 12.204 0A11.998 11.998 0 001.217 6.281l4.137 3.165c.97-2.887 3.668-5.036 6.85-5.036z" />
                        </svg>
                        Google
                    </button>
                </div>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <div className="h-px flex-1 bg-gray-700"></div>
                    <span className="mx-2 text-gray-400">OR CONTINUE WITH</span>
                    <div className="h-px flex-1 bg-gray-700"></div>
                </div>

                {/* Email and Password */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label htmlFor="email" className="font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="m@example.com"
                            className="w-full px-4 py-2 text-purple-900 rounded-md bg-transparent border-2 border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="font-semibold">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 text-purple-900 rounded-md bg-transparent border-2 border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-600 font-bold text-white rounded-md hover:bg-purple-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}