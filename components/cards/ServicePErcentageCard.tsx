// components/cards/ServicePercentageCard.tsx
import React from 'react';
import { CheckCircle, Star, Award, Shield } from 'lucide-react';

interface ServicePercentageCardProps {
  title: string;
  subtitle?: string;
  percentage: string;
  percentageText: string;
  description: string;
  icon?: 'check' | 'star' | 'award' | 'shield';
  variant?: 'primary' | 'secondary';
  layout?: 'card' | 'inline' | 'split';
}

const ServicePercentageCard: React.FC<ServicePercentageCardProps> = ({
  title,
  subtitle,
  percentage,
  percentageText,
  description,
  icon = 'check',
  variant = 'primary',
  layout = 'card'
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'star':
        return <Star className="size-8 text-yellow-500 fill-current" />;
      case 'award':
        return <Award className="size-8 text-blue-500" />;
      case 'shield':
        return <Shield className="size-8 text-green-500" />;
      default:
        return <CheckCircle className="size-8 text-green-500" />;
    }
  };

  // Inline Layout - No Card Style
  if (layout === 'inline') {
    return (
      <div className="flex items-start gap-6 p-6 bg-linear-to-r from-primary/5 to-secondary/5 rounded-2xl hover:shadow-lg transition-all duration-300">
        {/* Icon and Percentage */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-3xl lg:text-4xl font-bold text-primary">
              {percentage}
            </span>
            {getIcon()}
          </div>
          <span className="text-xs text-text font-medium bg-white px-2 py-1 rounded-full">
            RATED
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-secondary mb-2">
            {title}
          </h3>
          {subtitle && (
            <h4 className="text-lg font-semibold text-primary mb-3">
              {subtitle}
            </h4>
          )}
          <p className="text-lg font-semibold text-secondary mb-2">
            {percentageText}
          </p>
          <p className="text-text leading-7">
            {description}
          </p>
        </div>
      </div>
    );
  }

  // Split Layout - Side by side
  if (layout === 'split') {
    return (
      <div className="grid md:grid-cols-2 gap-8 items-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
        {/* Left Side - Stats */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl lg:text-6xl font-bold text-primary">
              {percentage}
            </span>
            <div className="flex flex-col items-center">
              {getIcon()}
              <span className="text-sm text-text font-medium mt-1">RATED</span>
            </div>
          </div>
          <p className="text-xl font-semibold text-secondary">
            {percentageText}
          </p>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-2">
              {title}
            </h3>
            {subtitle && (
              <h4 className="text-xl font-semibold text-primary">
                {subtitle}
              </h4>
            )}
          </div>
          <p className="text-text leading-7 text-lg">
            {description}
          </p>
        </div>
      </div>
    );
  }

  // Default Card Layout (original)
  const getVariantStyles = () => {
    if (variant === 'secondary') {
      return {
        card: 'bg-gradient-to-br from-gray-50 to-white border-2 border-primary/20',
        percentage: 'text-primary',
        title: 'text-secondary'
      };
    }
    return {
      card: 'bg-white border border-gray-100 shadow-lg',
      percentage: 'text-secondary',
      title: 'text-primary'
    };
  };

  const styles = getVariantStyles();

  return (
    <div className={`rounded-3xl p-8 ${styles.card} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className={`text-2xl lg:text-3xl font-bold ${styles.title} leading-tight mb-2`}>
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-xl lg:text-2xl font-semibold text-secondary leading-tight">
            {subtitle}
          </h3>
        )}
      </div>

      {/* Percentage Section */}
      <div className="flex items-center justify-center gap-4 mb-6 p-4 bg-linear-to-r from-primary/5 to-secondary/5 rounded-2xl">
        <div className="flex items-center gap-3">
          <span className={`text-4xl lg:text-5xl font-bold ${styles.percentage}`}>
            {percentage}
          </span>
          <div className="flex flex-col items-center">
            {getIcon()}
            <span className="text-xs text-text font-medium mt-1">RATED</span>
          </div>
        </div>
      </div>

      {/* Percentage Text */}
      <div className="text-center mb-4">
        <p className="text-lg font-semibold text-secondary leading-relaxed">
          {percentageText}
        </p>
      </div>

      {/* Description */}
      <div className="text-center">
        <p className="text-text leading-7">
          {description}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="flex justify-center mt-6 gap-2">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{ animationDelay: `${item * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePercentageCard;