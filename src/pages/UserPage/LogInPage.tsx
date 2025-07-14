

import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";

// Modern glassmorphism styles
const customStyles = `
  .glass-effect {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .glass-dark {
    backdrop-filter: blur(20px);
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-blue-900 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          {/* Animated gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-blue-600/8 to-purple-600/10"></div>
          
          {/* Floating shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-bl from-cyan-400/15 to-teal-400/15 rounded-full blur-xl"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(20,184,166,0.15)_1px,transparent_0)] bg-[size:50px_50px]"></div>
          </div>
        </div>

        {/* Brand Logo */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <h1 className="text-4xl font-black text-white tracking-wider">CASA</h1>
        </div>

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-md">
          <div className="glass-dark rounded-3xl p-8 shadow-2xl border border-white/10">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white mb-2 tracking-tight">WELCOME BACK</h2>
              <p className="text-gray-400 text-sm">Enter your details to sign in</p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full pl-12 pr-4 py-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-white/10 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full pl-12 pr-12 py-4 glass-effect rounded-xl text-white placeholder-gray-400 border border-white/10 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-3 text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border border-white/20 bg-transparent focus:ring-2 focus:ring-teal-400/20 focus:border-teal-400 text-teal-400"
                  />
                  <span>Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 transition-colors duration-200 font-medium"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                SIGN IN
              </button>

              {/* Sign Up Link */}
              <div className="text-center text-sm">
                <span className="text-gray-400">Don't Have An Account? </span>
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 transition-colors duration-200 font-medium"
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInPage;
