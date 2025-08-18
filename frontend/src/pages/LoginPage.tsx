import { Link } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { useState } from "react"
import meloopLogo from '../assets/meloop_logo.png'
import googleLogo from '../assets/google_logo.webp'

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="text-center flex justify-center">
          <img src={meloopLogo} alt="" className="max-w-2/5"/>
        </div>

        <div className="bg-gray-10 rounded-2xl shadow-xl border border-gray-100 p-8">
          <form className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Sign In</h2>
              <div className="max-w-4/12 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">Or continue with</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 transition-all duration-200 group">
            <img src={googleLogo} className="w-5 h-5 text-gray-600 group-hover:text-gray-700" />
            <span className="font-medium text-gray-700 group-hover:text-gray-800">Sign in with Google</span>
          </button>

          <div className="text-center mt-6 pt-4 border-t border-gray-100">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2025 meloop. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
