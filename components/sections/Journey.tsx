'use client';

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Tag, Home, Handshake } from "lucide-react";

type SegmentKey = "recherche" | "vente" | "conciergerie" | "transaction";

type Segment = {
  key: SegmentKey;
  label: string;
  description: string;
  Icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  start: number;
  end: number;
};

type CycleFocusProps = {
  size?: number;
  autoCycle?: boolean;
  cycleMs?: number;
  gapDeg?: number;
};

function polarToCartesian(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function ringSectorPath(
  cx: number,
  cy: number,
  rOuter: number,
  rInner: number,
  startDeg: number,
  endDeg: number
) {
  const startOuter = polarToCartesian(cx, cy, rOuter, startDeg);
  const endOuter = polarToCartesian(cx, cy, rOuter, endDeg);
  const startInner = polarToCartesian(cx, cy, rInner, startDeg);
  const endInner = polarToCartesian(cx, cy, rInner, endDeg);

  const sweep = endDeg - startDeg;
  const largeArc = sweep <= 180 ? 0 : 1;

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${endOuter.x} ${endOuter.y}`,
    `L ${endInner.x} ${endInner.y}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${startInner.x} ${startInner.y}`,
    "Z",
  ].join(" ");
}

// Arc de progression autour d'un segment
function progressArcPath(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
  progress: number
) {
  const actualEnd = startDeg + (endDeg - startDeg) * progress;
  if (progress <= 0) return "";

  const start = polarToCartesian(cx, cy, r, startDeg);
  const end = polarToCartesian(cx, cy, r, actualEnd);
  const sweep = actualEnd - startDeg;
  const largeArc = sweep > 180 ? 1 : 0;

  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

function CycleFocus({
  size: propSize = 340,
  autoCycle = true,
  cycleMs = 3000,
  gapDeg = 12,
}: CycleFocusProps) {
  const [size, setSize] = useState(propSize);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 400) {
        setSize(260);
      } else if (window.innerWidth < 640) {
        setSize(300);
      } else {
        setSize(propSize);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [propSize]);

  const vb = 340;
  const cx = vb / 2;
  const cy = vb / 2;

  const rOuter = 155;
  const rInner = 80;

  const segments: Segment[] = useMemo(
    () => [
      {
        key: "recherche",
        label: "Recherche",
        description:
          "Identifiez les biens immobiliers idéaux pour vos clients investisseurs. Analyse du marché, sélection ciblée et présentation de opportunités adaptées à leurs critères.",
        Icon: Search,
        start: 270,
        end: 360,
      },
      {
        key: "vente",
        label: "Vente",
        description:
          "Accompagnez vos clients dans la vente de leurs biens. Estimation, mise en valeur, diffusion et négociation pour maximiser leur retour sur investissement.",
        Icon: Tag,
        start: 0,
        end: 90,
      },
      {
        key: "conciergerie",
        label: "Conciergerie",
        description:
          "Gérez l'exploitation locative de A à Z. Accueil voyageurs, ménage, maintenance et optimisation des revenus locatifs pour une rentabilité maximale.",
        Icon: Home,
        start: 90,
        end: 180,
      },
      {
        key: "transaction",
        label: "Transaction",
        description:
          "Sécurisez chaque acquisition avec un accompagnement complet. Négociation, coordination notariale et suivi jusqu'à la remise des clés.",
        Icon: Handshake,
        start: 180,
        end: 270,
      },
    ],
    []
  );

  const [active, setActive] = useState<SegmentKey>("recherche");
  const [isHovering, setIsHovering] = useState(false);
  const [progress, setProgress] = useState(0);

  // Ordre de défilement : sens anti-horaire (Recherche → Transaction → Conciergerie → Vente)
  const cycleOrder: SegmentKey[] = ["recherche", "transaction", "conciergerie", "vente"];
  const activeSeg = segments.find((s) => s.key === active)!;
  const activeIndex = cycleOrder.indexOf(active);

  // Animation de la barre de progression
  useEffect(() => {
    if (!autoCycle || isHovering) {
      return;
    }

    setProgress(0);
    const startTime = Date.now();
    const animationFrame = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / cycleMs, 1);
      setProgress(newProgress);

      if (newProgress < 1) {
        requestAnimationFrame(animationFrame);
      }
    };

    const frameId = requestAnimationFrame(animationFrame);
    return () => cancelAnimationFrame(frameId);
  }, [active, autoCycle, cycleMs, isHovering]);

  // Changement de segment
  useEffect(() => {
    if (!autoCycle || isHovering) return;

    const id = window.setInterval(() => {
      setActive((prev) => {
        const idx = cycleOrder.indexOf(prev);
        const next = cycleOrder[(idx + 1) % cycleOrder.length];
        return next;
      });
    }, cycleMs);

    return () => window.clearInterval(id);
  }, [autoCycle, cycleMs, isHovering]);

  const pad = gapDeg / 2;
  const iconRadius = rInner + (rOuter - rInner) * 0.5;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-16 w-full">
      {/* GAUCHE : schéma */}
      <div className="flex justify-center">
        <div className="relative">
          {/* Donut */}
          <div
            className="relative"
            style={{ width: size, height: size }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-evolys-blue/20 rounded-full blur-3xl scale-75 opacity-50" />

            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${vb} ${vb}`}
              role="img"
              className="relative z-10"
            >
              <defs>
                <linearGradient id="segmentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B4D8" />
                  <stop offset="100%" stopColor="#0077B6" />
                </linearGradient>
                <linearGradient id="segmentGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#48CAE4" />
                  <stop offset="100%" stopColor="#00B4D8" />
                </linearGradient>
                <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00B4D8" floodOpacity="0.3" />
                </filter>
                <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {segments.map((s) => {
                const isActive = s.key === active;
                const d = ringSectorPath(cx, cy, rOuter, rInner, s.start + pad, s.end - pad);
                const mid = (s.start + s.end) / 2;
                const iconPos = polarToCartesian(cx, cy, iconRadius, mid);

                return (
                  <motion.g
                    key={s.key}
                    onMouseEnter={() => setActive(s.key)}
                    onClick={() => setActive(s.key)}
                    style={{ cursor: "pointer", transformOrigin: `${cx}px ${cy}px` }}
                    animate={{ scale: isActive ? 1.08 : 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <motion.path
                      d={d}
                      fill={isActive ? "url(#segmentGradient)" : "url(#segmentGradientLight)"}
                      animate={{ opacity: isActive ? 1 : 0.6 }}
                      transition={{ duration: 0.3 }}
                      filter={isActive ? "url(#softShadow)" : "none"}
                    />
                    {/* Barre de progression autour du segment actif */}
                    {isActive && !isHovering && (
                      <path
                        d={progressArcPath(cx, cy, rOuter + 8, s.start + pad, s.end - pad, progress)}
                        fill="none"
                        stroke="url(#segmentGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    )}
                    {/* Icon background circle */}
                    <circle
                      cx={iconPos.x}
                      cy={iconPos.y}
                      r={16}
                      fill="white"
                      opacity={isActive ? 1 : 0.9}
                    />
                    {/* Icon */}
                    <g transform={`translate(${iconPos.x - 10}, ${iconPos.y - 10})`}>
                      <s.Icon
                        size={20}
                        className={isActive ? "text-evolys-blue-dark" : "text-evolys-blue"}
                        strokeWidth={2}
                      />
                    </g>
                  </motion.g>
                );
              })}

              {/* Centre circle */}
              <circle cx={cx} cy={cy} r={rInner - 8} fill="white" />
              <circle
                cx={cx}
                cy={cy}
                r={rInner - 12}
                fill="none"
                stroke="url(#segmentGradient)"
                strokeWidth="2"
                strokeDasharray="4 4"
                opacity="0.3"
              />
            </svg>

            {/* Centre icon */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-evolys-blue to-evolys-blue-dark flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Labels / pastilles */}
      <div className="flex sm:hidden justify-center gap-2 flex-wrap">
        {cycleOrder.map((key) => {
          const seg = segments.find((s) => s.key === key)!;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                active === key
                  ? "bg-gradient-to-r from-evolys-blue to-evolys-blue-dark text-white shadow-md"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {seg.label}
            </button>
          );
        })}
      </div>

      {/* DROITE : description */}
      <div className="flex-1 max-w-lg text-center lg:text-left px-4 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeg.key}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-evolys-blue/10 to-evolys-blue-dark/10 flex items-center justify-center">
                <activeSeg.Icon size={20} className="text-evolys-blue" strokeWidth={2} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-dark">
                {activeSeg.label}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {activeSeg.description}
            </p>

            {/* Progress indicators - suivant l'ordre du cycle */}
            <div className="flex gap-2 justify-center lg:justify-start pt-2">
              {cycleOrder.map((key, index) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "w-8 bg-gradient-to-r from-evolys-blue to-evolys-blue-dark"
                      : index < activeIndex
                        ? "w-1.5 bg-evolys-blue/40"
                        : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute top-0 left-[-10%] w-[60%] h-full opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(-45deg,#00B4D8_0,#00B4D8_1px,transparent_1px,transparent_15px)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-dark mb-4">
            Un <span className="bg-gradient-to-r from-evolys-blue to-evolys-blue-dark bg-clip-text text-transparent">cycle</span> parfait
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            De la recherche à la gestion locative, offrez un accompagnement complet à vos clients
          </p>
        </motion.div>

        {/* Cycle Schema */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CycleFocus size={340} />
        </motion.div>
      </div>
    </section>
  );
}

export default Journey;
