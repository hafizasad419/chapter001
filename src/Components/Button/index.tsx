import React from 'react';
import { Loader2 } from "lucide-react";
import { cn } from "@src/lib/utils";

// Define button variants and sizes
type ButtonVariant = 'solid' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'solid',
    size = 'md',
    className,
    disabled,
    loading = false,
    fullWidth = false,
    ...props
}) => {
    // Base styles
    const baseStyles = "relative font-medium rounded-lg transition-all duration-200 flex items-center justify-center";

    // Size styles
    const sizeStyles = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    };

    // Variant styles
    const variantStyles = {
        solid: `
            bg-red-800/10 hover:bg-red-500/20 
            text-navy-500
            backdrop-blur-sm
            disabled:bg-gray-300 disabled:text-gray-500
        `,
        outline: `
            border-2 border-red-800/20 hover:border-red-500/40
            text-navy-500 hover:bg-red-500/10
            backdrop-blur-sm
            disabled:border-gray-300 disabled:text-gray-500
        `,
        ghost: `
            text-navy-500 hover:bg-red-500/10
            backdrop-blur-sm
            disabled:text-gray-500
        `
    };

    // Width style
    const widthStyle = fullWidth ? 'w-full' : '';

    // Combined styles
    const combinedStyles = cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        widthStyle,
        'disabled:cursor-not-allowed disabled:opacity-60',
        className
    );

    return (
        <button
            className={combinedStyles}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            )}
            {children}
        </button>
    );
};

export default Button;