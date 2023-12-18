import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const CursorDot = styled.div`
  position: fixed;
  width: 24px;
  height: 24px;
  pointer-events: none;
  z-index: 9999;
  cursor: none;
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
`;

const AimOuterRing = styled.div`
  width: 28px;
  height: 28px;
  border: 3px solid rgba(0, 255, 0, 0.7); /* Green outer ring color */
  border-radius: 50%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${pulseAnimation} 1s ease infinite;
  pointer-events: none;
`;

const AimInnerDot = styled.div`
  width: 4px;
  height: 4px;
  background-color: rgba(0, 255, 0, 0.8);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const CustomCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e : any) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <CursorDot style={{ left: mousePosition.x, top: mousePosition.y }}>
        <AimOuterRing>
          <AimInnerDot />
        </AimOuterRing>
      </CursorDot>
    </div>
  );
};

export default CustomCursor;
