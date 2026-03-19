import { Outlet, useLocation, useNavigate } from "react-router";
import { Home, Calendar, User } from "lucide-react";

export function Root() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[var(--color-background-primary)]">
      <div className="max-w-[420px] mx-auto py-4">
        <div className="flex flex-col min-h-[600px]">
          <Outlet />
          
          {/* Bottom Tab Bar */}
          <div className="flex border-t border-[var(--color-border-tertiary)] bg-[var(--color-background-primary)]">
            <button
              onClick={() => navigate("/")}
              className={`flex-1 py-3 px-1 text-center cursor-pointer text-[11px] flex flex-col items-center gap-[3px] ${
                isActive("/") && !location.pathname.includes("reserve")
                  ? "text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-secondary)]"
              }`}
            >
              <div
                className={`w-[18px] h-[18px] rounded-full flex items-center justify-center ${
                  isActive("/") && !location.pathname.includes("reserve")
                    ? "bg-[var(--color-text-primary)]"
                    : "bg-[var(--color-background-secondary)]"
                }`}
              >
                <Home
                  className={`w-[10px] h-[10px] ${
                    isActive("/") && !location.pathname.includes("reserve")
                      ? "text-[var(--color-background-primary)]"
                      : "text-[var(--color-text-secondary)]"
                  }`}
                />
              </div>
              Home
            </button>
            
            <button
              onClick={() => navigate("/my-reservations")}
              className={`flex-1 py-3 px-1 text-center cursor-pointer text-[11px] flex flex-col items-center gap-[3px] ${
                isActive("/my-reservations")
                  ? "text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-secondary)]"
              }`}
            >
              <div
                className={`w-[18px] h-[18px] rounded-full flex items-center justify-center ${
                  isActive("/my-reservations")
                    ? "bg-[var(--color-text-primary)]"
                    : "bg-[var(--color-background-secondary)]"
                }`}
              >
                <Calendar
                  className={`w-[10px] h-[10px] ${
                    isActive("/my-reservations")
                      ? "text-[var(--color-background-primary)]"
                      : "text-[var(--color-text-secondary)]"
                  }`}
                />
              </div>
              Bookings
            </button>
            
            <button
              onClick={() => navigate("/login")}
              className={`flex-1 py-3 px-1 text-center cursor-pointer text-[11px] flex flex-col items-center gap-[3px] ${
                isActive("/login") || isActive("/register")
                  ? "text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-secondary)]"
              }`}
            >
              <div
                className={`w-[18px] h-[18px] rounded-full flex items-center justify-center ${
                  isActive("/login") || isActive("/register")
                    ? "bg-[var(--color-text-primary)]"
                    : "bg-[var(--color-background-secondary)]"
                }`}
              >
                <User
                  className={`w-[10px] h-[10px] ${
                    isActive("/login") || isActive("/register")
                      ? "text-[var(--color-background-primary)]"
                      : "text-[var(--color-text-secondary)]"
                  }`}
                />
              </div>
              Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
