import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)]">
        <div className="text-base font-medium text-[var(--color-text-primary)]">Account</div>
        <button
          onClick={() => navigate("/")}
          className="w-8 h-8 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-tertiary)] flex items-center justify-center cursor-pointer text-sm"
        >
          <ChevronLeft className="w-3 h-3 text-[var(--color-text-primary)]" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Auth Header */}
        <div className="text-center pt-8 pb-6">
          <h1 className="text-[22px] font-medium text-[var(--color-text-primary)]">Welcome back</h1>
          <p className="text-sm text-[var(--color-text-secondary)] mt-[6px]">
            Sign in to manage your reservations
          </p>
        </div>

        <form onSubmit={handleSignIn}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="text-[13px] text-[var(--color-text-secondary)] mb-[6px] block">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-[14px] py-[10px] border border-[var(--color-border-secondary)] rounded-[var(--border-radius-md)] text-sm bg-[var(--color-background-primary)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-border-primary)]"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="text-[13px] text-[var(--color-text-secondary)] mb-[6px] block">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-[14px] py-[10px] border border-[var(--color-border-secondary)] rounded-[var(--border-radius-md)] text-sm bg-[var(--color-background-primary)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-border-primary)]"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[var(--color-text-primary)] text-[var(--color-background-primary)] border-none rounded-[var(--border-radius-md)] text-sm font-medium cursor-pointer mt-2 hover:opacity-90"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-[10px] my-4 text-[var(--color-text-tertiary)] text-xs">
          <div className="flex-1 h-[0.5px] bg-[var(--color-border-tertiary)]" />
          or
          <div className="flex-1 h-[0.5px] bg-[var(--color-border-tertiary)]" />
        </div>

        {/* Create Account Button */}
        <button
          onClick={() => navigate("/register")}
          className="w-full py-3 bg-[var(--color-background-primary)] text-[var(--color-text-primary)] border border-[var(--color-border-secondary)] rounded-[var(--border-radius-md)] text-sm cursor-pointer hover:bg-[var(--color-background-secondary)]"
        >
          Create an account
        </button>

        {/* Auth Switch */}
        <div className="text-center mt-3 text-[13px] text-[var(--color-text-secondary)]">
          Forgot password?{" "}
          <span className="text-[var(--color-text-primary)] cursor-pointer underline">Reset it</span>
        </div>
      </div>
    </>
  );
}
