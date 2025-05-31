import { useState } from "react";
import { Link, redirect } from "react-router";
import pkg from '@syncfusion/ej2-react-buttons';
const { ButtonComponent } = pkg;
import { loginWithGoogle } from "~/appwrite/auth";
import { account } from "~/appwrite/client";

export async function clientLoader() {
    try {
        const user = await account.get();
        if (user.$id) return redirect('/');
    } catch (e) {
        console.log('Error fetching user', e);
    }
}

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await account.createEmailSession(email, password);
            // بعد تسجيل الدخول بنجاح، توجه المستخدم لصفحة رئيسية
            window.location.href = "/dashboard";
        } catch (err) {
            setError("فشل تسجيل الدخول، تأكد من البريد وكلمة السر");
            console.error(err);
        }
    };

    return (
        <main className="auth">
            <section className="size-full glassmorphism flex-center px-6">
                <div className="sign-in-card">
                    <header className="header">
                        <Link to="/">
                            <img
                                src="/assets/icons/logo.svg"
                                alt="logo"
                                className="size-[30px]"
                            />
                        </Link>
                        <h1 className="p-28-bold text-dark-100">Roamara</h1>
                    </header>

                    <article>
                        <h2 className="p-28-semibold text-dark-100 text-center">
                            Start Your Travel Journey
                        </h2>

                        <p className="p-18-regular text-center text-gray-100 !leading-7">
                            Sign in with Google or with your email and password to manage destinations, itineraries, and user activity with ease.
                        </p>
                    </article>

                    {/* نموذج تسجيل الدخول بالبريد وكلمة السر */}
                    <form onSubmit={handleSubmit} className="mb-4">
                        <input
                            type="email"
                            placeholder="البريد الإلكتروني"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input-field"
                        />
                        <input
                            type="password"
                            placeholder="كلمة السر"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="input-field"
                        />
                        <button type="submit" className="button-class !h-11 !w-full mb-4">
                            تسجيل دخول
                        </button>
                        {error && <p className="text-red-600">{error}</p>}
                    </form>

                    {/* زر تسجيل الدخول بجوجل */}
                    <ButtonComponent
                        type="button"
                        iconCss="e-search-icon"
                        className="button-class !h-11 !w-full"
                        onClick={loginWithGoogle}
                    >
                        <img
                            src="/assets/icons/google.svg"
                            className="size-5"
                            alt="google"
                        />
                        <span className="p-18-semibold text-white">Sign in with Google</span>
                    </ButtonComponent>
                </div>
            </section>
        </main>
    );
};

export default SignIn;
