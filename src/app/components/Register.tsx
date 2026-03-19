import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)]">
        <div className="text-base font-medium text-[var(--color-text-primary)]">Create account</div>
        <button
          onClick={() => navigate("/login")}
          className="w-8 h-8 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-tertiary)] flex items-center justify-center cursor-pointer text-sm"
        >
          <ChevronLeft className="w-3 h-3 text-[var(--color-text-primary)]" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <form onSubmit={handleCreateAccount}>
          {/* Full Name Field */}
          <div className="mb-4">
            <label className="text-[13px] text-[var(--color-text-secondary)] mb-[6px] block">
              Full name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-[14px] py-[10px] border border-[var(--color-border-secondary)] rounded-[var(--border-radius-md)] text-sm bg-[var(--color-background-primary)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-border-primary)]"
            />
          </div>

          {/* Telephone Field */}
          <div className="mb-4">
            <label className="text-[13px] text-[var(--color-text-secondary)] mb-[6px] block">
              Telephone
            </label>
            <input
              type="tel"
              placeholder="08X-XXX-XXXX"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-full px-[14px] py-[10px] border border-[var(--color-border-secondary)] rounded-[var(--border-radius-md)] text-sm bg-[var(--color-background-primary)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-border-primary)]"
            />
          </div>

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
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-[14px] py-[10px] border border-[var(--color-border-secondary)] rounded-[var(--border-radius-md)] text-sm bg-[var(--color-background-primary)] text-[var(--color-text-primary)] outline-none focus:border-[var(--color-border-primary)]"
            />
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[var(--color-text-primary)] text-[var(--color-background-primary)] border-none rounded-[var(--border-radius-md)] text-sm font-medium cursor-pointer mt-2 hover:opacity-90"
          >
            Create account
          </button>
        </form>

        {/* Auth Switch */}
        <div className="text-center mt-4 text-[13px] text-[var(--color-text-secondary)]">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[var(--color-text-primary)] cursor-pointer underline"
          >
            Sign in
          </span>
        </div>
      </div>
    </>
  );
}
