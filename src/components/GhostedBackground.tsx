/**
 * Reusable Ghosted Background Photography Layer
 * Elite Aesthetics Cebu — Visual Rhythm System
 *
 * Forwards to GhostedImage for backward compatibility.
 */

import React from 'react';
import { GhostedImage, GhostedMaskType, GhostedPosition } from './ui/GhostedImage';

export interface GhostedBackgroundProps {
  assetKey?: string;
  opacity?: number;
  fade?: GhostedMaskType;
  position?: GhostedPosition;
  className?: string;
}

export const GhostedBackground: React.FC<GhostedBackgroundProps> = ({
  assetKey,
  opacity,
  fade,
  position,
  className,
}) => {
  return (
    <GhostedImage
      assetKey={assetKey}
      opacity={opacity}
      mask={fade}
      position={position}
      className={className}
    />
  );
};

export { GhostedImage };
