'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface AnimatedSkillBarProps {
  skill: Skill;
  index?: number; // Make index optional
}

export function AnimatedSkillBar({ skill, index = 0 }: AnimatedSkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
        <motion.div 
          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}
