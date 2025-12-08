'use client';

import { motion } from 'framer-motion';

export function MoneyWastedIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
      {/* Dollar bills stack */}
      <motion.rect
        x="15"
        y="25"
        width="50"
        height="30"
        rx="2"
        fill="#025082"
        opacity="0.1"
        initial={{ y: 0, opacity: 0.1 }}
        animate={{ y: [0, -5, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.rect
        x="13"
        y="22"
        width="50"
        height="30"
        rx="2"
        stroke="#025082"
        strokeWidth="2"
        fill="white"
        initial={{ y: 0 }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
      />
      {/* Dollar sign */}
      <motion.text
        x="38"
        y="42"
        fontSize="24"
        fontWeight="600"
        fill="#025082"
        textAnchor="middle"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        $
      </motion.text>
      {/* Downward trend line */}
      <motion.path
        d="M 10 15 L 25 20 L 40 12 L 55 25 L 70 35"
        stroke="#FF6B35"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </svg>
  );
}

export function GenericAIIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
      {/* Robot head outline */}
      <motion.rect
        x="20"
        y="25"
        width="40"
        height="35"
        rx="4"
        stroke="#025082"
        strokeWidth="2"
        fill="white"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Eyes - blinking animation */}
      <motion.circle
        cx="33"
        cy="40"
        r="4"
        fill="#025082"
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />
      <motion.circle
        cx="47"
        cy="40"
        r="4"
        fill="#025082"
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />
      {/* Antenna */}
      <motion.line x1="40" y1="25" x2="40" y2="15" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" />
      <motion.circle
        cx="40"
        cy="15"
        r="3"
        fill="#FF6B35"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      {/* Mouth - sad/confused */}
      <motion.path d="M 30 52 Q 40 48 50 52" stroke="#025082" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Question mark floating */}
      <motion.text
        x="65"
        y="35"
        fontSize="16"
        fill="#FF6B35"
        fontWeight="600"
        initial={{ y: 35, opacity: 0.4 }}
        animate={{ y: [35, 30, 35], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ?
      </motion.text>
    </svg>
  );
}

export function PilotPurgatoryIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
      {/* Hourglass */}
      <motion.path d="M 25 15 L 55 15 L 50 40 L 30 40 L 25 15 Z" stroke="#025082" strokeWidth="2" fill="white" />
      <motion.path d="M 25 65 L 55 65 L 50 40 L 30 40 L 25 65 Z" stroke="#025082" strokeWidth="2" fill="white" />
      {/* Sand - animated */}
      <motion.path
        d="M 30 20 L 50 20 L 45 38 L 35 38 Z"
        fill="#025082"
        opacity="0.2"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: [1, 0.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: 'top' }}
      />
      {/* Sand trickling */}
      <motion.circle
        cx="40"
        cy="40"
        r="1.5"
        fill="#025082"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: [0, 10, 20], opacity: [1, 0.5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
      {/* Circular arrow indicating loop */}
      <motion.path
        d="M 65 40 A 15 15 0 1 1 64.9 41"
        stroke="#FF6B35"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      {/* Arrow head */}
      <motion.path d="M 65 41 L 67 45 L 62 43 Z" fill="#FF6B35" opacity="0.6" />
    </svg>
  );
}

export function AgentFactoryIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
      {/* Factory building */}
      <motion.rect
        x="15"
        y="35"
        width="50"
        height="30"
        rx="2"
        stroke="#025082"
        strokeWidth="2"
        fill="white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      {/* Smokestack */}
      <motion.rect x="55" y="20" width="8" height="15" stroke="#025082" strokeWidth="2" fill="white" />
      {/* Smoke */}
      <motion.circle
        cx="59"
        cy="15"
        r="4"
        fill="#025082"
        opacity="0.2"
        initial={{ y: 0, scale: 0.5 }}
        animate={{ y: [-5, -15], scale: [0.5, 1.2], opacity: [0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Gears inside */}
      <motion.circle
        cx="30"
        cy="50"
        r="8"
        stroke="#FF6B35"
        strokeWidth="2"
        fill="none"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '30px 50px' }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="6"
        stroke="#025082"
        strokeWidth="2"
        fill="none"
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '50px 50px' }}
      />
    </svg>
  );
}

export function IndustryExpertiseIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
      {/* Building icons */}
      <motion.rect
        x="10"
        y="30"
        width="20"
        height="35"
        rx="1"
        stroke="#025082"
        strokeWidth="2"
        fill="white"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
      />
      <motion.rect
        x="30"
        y="20"
        width="20"
        height="45"
        rx="1"
        stroke="#025082"
        strokeWidth="2"
        fill="white"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      <motion.rect
        x="50"
        y="35"
        width="20"
        height="30"
        rx="1"
        stroke="#025082"
        strokeWidth="2"
        fill="white"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      {/* Windows */}
      <rect x="14" y="35" width="5" height="5" fill="#025082" opacity="0.3" />
      <rect x="14" y="45" width="5" height="5" fill="#025082" opacity="0.3" />
      <rect x="34" y="25" width="5" height="5" fill="#025082" opacity="0.3" />
      <rect x="34" y="35" width="5" height="5" fill="#025082" opacity="0.3" />
      <rect x="34" y="45" width="5" height="5" fill="#025082" opacity="0.3" />
      <rect x="54" y="40" width="5" height="5" fill="#025082" opacity="0.3" />
      <rect x="54" y="50" width="5" height="5" fill="#025082" opacity="0.3" />
      {/* Connection lines */}
      <motion.path
        d="M 20 25 Q 40 10 60 25"
        stroke="#FF6B35"
        strokeWidth="2"
        strokeDasharray="4 4"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </svg>
  );
}

export function SpeedIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="mx-auto">
      {/* Clock face */}
      <motion.circle
        cx="40"
        cy="40"
        r="28"
        stroke="#025082"
        strokeWidth="2"
        fill="white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      {/* Clock marks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <motion.line
          key={i}
          x1={40 + 22 * Math.cos((angle * Math.PI) / 180)}
          y1={40 + 22 * Math.sin((angle * Math.PI) / 180)}
          x2={40 + 26 * Math.cos((angle * Math.PI) / 180)}
          y2={40 + 26 * Math.sin((angle * Math.PI) / 180)}
          stroke="#025082"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.5 + i * 0.05 }}
        />
      ))}
      {/* Hour hand - fast spinning */}
      <motion.line
        x1="40"
        y1="40"
        x2="40"
        y2="25"
        stroke="#025082"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '40px 40px' }}
      />
      {/* Minute hand - super fast */}
      <motion.line
        x1="40"
        y1="40"
        x2="40"
        y2="18"
        stroke="#FF6B35"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '40px 40px' }}
      />
      {/* Center dot */}
      <circle cx="40" cy="40" r="3" fill="#FF6B35" />
      {/* 48h text */}
      <motion.text
        x="40"
        y="58"
        fontSize="10"
        fill="#025082"
        textAnchor="middle"
        fontWeight="600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        48h
      </motion.text>
    </svg>
  );
}

