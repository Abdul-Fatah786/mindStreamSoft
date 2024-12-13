/* eslint-disable react/prop-types */
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export function ServiceCard({
    title,
    description,
    icon: Icon,
    href,
    variant = "default",  // Default to 'default' variant
}) {
    return (
        <div
            className={cn(
                "flex flex-col items-center text-center p-8 rounded-2xl",
                variant === "purple" ? "bg-[#7C3AED] text-white" : "bg-white"
            )}
        >
            <div className="mb-6 rounded-full text-[#7C3AED] ">
                <Icon className="size-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="mb-6">{description}</p>
            <Link
                href={href}
                className={cn(
                    "inline-flex items-center px-6 py-2 rounded-full font-medium",
                    variant === "purple"
                        ? "bg-white text-[#7C3AED] hover:bg-gray-100"
                        : "bg-[#D946EF] text-white hover:bg-[#D946EF]/90"
                )}
            >
                Explore
                <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </Link>
        </div>
    );
}
