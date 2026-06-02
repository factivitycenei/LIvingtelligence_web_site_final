import { motion } from 'motion/react';

export const Custodian3Diagram = ({ className = "", labels }: { className?: string, labels: any }) => {
  const tealDeep = "#004d40";
  const tealLight = "#e0f2f1";
  const accent = "#ffb74d";

  if (!labels) return null;

  return (
    <div className={`relative w-full max-w-4xl mx-auto py-12 px-4 md:px-8 bg-zinc-50/20 ${className}`}>
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 1000 1500" className="w-full h-auto overflow-visible font-sans">
          
          {/* Background Grid Lines (Horizontal divisors) */}
          <g className="stroke-zinc-100" strokeWidth="1" strokeDasharray="4 8">
            <line x1="50" y1="300" x2="950" y2="300" />
            <line x1="50" y1="650" x2="950" y2="650" />
            <line x1="50" y1="1000" x2="950" y2="1000" />
            <line x1="50" y1="1250" x2="950" y2="1250" />
          </g>

          {/* Level Numbers and Titles - Left Side */}
          <g className="fill-zinc-800">
            {/* Level 5 */}
            <g transform="translate(60, 150)">
              <circle cx="0" cy="0" r="22" fill="white" stroke="#d4d4d8" strokeWidth="1" />
              <text textAnchor="middle" dy="7" className="text-[20px] font-medium">5</text>
              <text x="0" y="55" className="text-[22px] font-light tracking-[0.05em] uppercase">{labels.levels[4].split(' ')[0]}</text>
              <text x="0" y="85" className="text-[22px] font-light tracking-[0.05em] uppercase">{labels.levels[4].split(' ').slice(1).join(' ')}</text>
              <line x1="0" y1="105" x2="40" y2="105" stroke={accent} strokeWidth="3" />
            </g>

            {/* Level 4 */}
            <g transform="translate(60, 480)">
              <circle cx="0" cy="0" r="22" fill="white" stroke="#d4d4d8" strokeWidth="1" />
              <text textAnchor="middle" dy="7" className="text-[20px] font-medium">4</text>
              <text x="0" y="55" className="text-[22px] font-light tracking-[0.05em] uppercase">{labels.levels[3]}</text>
              <line x1="0" y1="75" x2="40" y2="75" stroke={accent} strokeWidth="3" />
            </g>

            {/* Level 3 */}
            <g transform="translate(60, 800)">
              <circle cx="0" cy="0" r="22" fill="white" stroke="#d4d4d8" strokeWidth="1" />
              <text textAnchor="middle" dy="7" className="text-[20px] font-medium">3</text>
              <text x="0" y="55" className="text-[22px] font-light tracking-[0.05em] uppercase">{labels.levels[2]}</text>
              <line x1="0" y1="75" x2="40" y2="75" stroke={accent} strokeWidth="3" />
            </g>

            {/* Level 2 */}
            <g transform="translate(60, 1080)">
              <circle cx="0" cy="0" r="22" fill="white" stroke="#d4d4d8" strokeWidth="1" />
              <text textAnchor="middle" dy="7" className="text-[20px] font-medium">2</text>
              <text x="0" y="55" className="text-[22px] font-light tracking-[0.05em] uppercase">{labels.levels[1]}</text>
              <line x1="0" y1="75" x2="40" y2="75" stroke={accent} strokeWidth="3" />
            </g>

            {/* Level 1 */}
            <g transform="translate(60, 1315)">
              <circle cx="0" cy="0" r="22" fill="white" stroke="#d4d4d8" strokeWidth="1" />
              <text textAnchor="middle" dy="7" className="text-[20px] font-medium">1</text>
              <text x="0" y="55" className="text-[22px] font-light tracking-[0.05em] uppercase tracking-widest">{labels.levels[0]}</text>
              <line x1="0" y1="75" x2="40" y2="75" stroke={accent} strokeWidth="3" />
            </g>
          </g>

          {/* RIGHT SIDE LABELS */}
          <g className="fill-zinc-500 text-[18px] font-light">
            {/* Level 5 Right */}
            <g transform="translate(780, 220)">
              <text dy="0">{labels.l5[0]}</text>
              <text dy="30">{labels.l5[1]}</text>
              <text dy="60">{labels.l5[2]}</text>
            </g>

            {/* Level 3 Right */}
            <g transform="translate(730, 780)">
              <text dy="0">{labels.l3[0]}</text>
              <text dy="30">{labels.l3[1]}</text>
              <text dy="60">{labels.l3[2]}</text>
              <text dy="90">{labels.l3[3]}</text>
              <line x1="0" y1="110" x2="40" y2="110" stroke={accent} strokeWidth="2" />
              <text dy="150" className="italic fill-zinc-600 text-[16px]">{labels.l3[4]}</text>
              <text dy="175" className="italic fill-zinc-600 text-[16px]">{labels.l3[5]}</text>
            </g>

            {/* Level 2 Right */}
            <g transform="translate(780, 1070)">
              <text dy="0">{labels.l2[0]}</text>
              <text dy="30">{labels.l2[1]}</text>
              <text dy="60">{labels.l2[2]}</text>
              <text dy="90">{labels.l2[3]}</text>
              <text dy="150" className="italic fill-zinc-600 text-[16px]">{labels.l2[4]}</text>
              <text dy="175" className="italic fill-zinc-600 text-[16px]">{labels.l2[5]}</text>
              <text dy="200" className="italic fill-zinc-600 text-[16px]">{labels.l2[6]}</text>
            </g>

            {/* Level 1 Right */}
            <g transform="translate(780, 1310)">
              <text dy="0">{labels.l1[0]}</text>
              <text dy="30">{labels.l1[1]}</text>
              <text dy="60">{labels.l1[2]}</text>
              <text dy="90">{labels.l1[3]}</text>
            </g>
          </g>

          {/* MAIN VISUAL FLOW - CENTER */}
          
          {/* Level 1: Signals Cloud */}
          <g transform="translate(500, 1400)">
            {[...Array(120)].map((_, i) => (
              <motion.circle 
                key={i}
                cx={(Math.random() - 0.5) * 600}
                cy={(Math.random() - 0.5) * 100}
                r={1.2 + Math.random() * 2}
                fill="#d1d5db"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 3 + Math.random() * 4, repeat: Infinity }}
              />
            ))}
          </g>

          {/* Level 2: Phenom Clusters */}
          <g transform="translate(500, 1150)">
            {[
              { x: -150, y: -20, nodes: 5 },
              { x: 0, y: 30, nodes: 6 },
              { x: 180, y: -40, nodes: 4 },
              { x: -50, y: -70, nodes: 4 }
            ].map((cluster, i) => (
              <g key={i} transform={`translate(${cluster.x}, ${cluster.y})`}>
                {/* Cluster Lines */}
                <g className="stroke-zinc-200" strokeWidth="0.5">
                  <line x1="0" y1="0" x2="30" y2="40" />
                  <line x1="0" y1="0" x2="-30" y2="40" />
                  <line x1="30" y1="40" x2="-30" y2="40" />
                  <line x1="0" y1="0" x2="0" y2="-40" />
                </g>
                <circle cx="0" cy="0" r="4" fill={tealDeep} opacity="0.3" />
                <circle cx="30" cy="40" r="4" fill={tealDeep} opacity="0.3" />
                <circle cx="-30" cy="40" r="4" fill={tealDeep} opacity="0.3" />
                <circle cx="0" cy="-40" r="4" fill={tealDeep} opacity="0.3" />
              </g>
            ))}
          </g>

          {/* Lines flowing Level 1 -> Level 2 */}
          <g transform="translate(500, 1250)" className="stroke-zinc-200" fill="none" strokeWidth="1">
            <path d="M-50 50 Q-100 20 -150 -50" opacity="0.4" />
            <path d="M0 50 Q0 20 0 -50" opacity="0.4" />
            <path d="M50 50 Q100 20 180 -50" opacity="0.4" />
          </g>

          {/* Level 3: The Cube (Observation) */}
          <g transform="translate(500, 850)">
            <motion.g 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              <g className="stroke-zinc-800" fill="none" strokeWidth="1.5">
                {/* Cube Wireframe */}
                <path d="M-150 -100 L150 -100 L150 100 L-150 100 Z" />
                <path d="M-130 -120 L170 -120 L170 80 L-130 80 Z" opacity="0.5" />
                <line x1="-150" y1="-100" x2="-130" y2="-120" />
                <line x1="150" y1="-100" x2="170" y2="-120" />
                <line x1="150" y1="100" x2="170" y2="80" />
                <line x1="-150" y1="100" x2="-130" y2="80" />
              </g>

              {/* Data in Cube */}
              <g>
                {[...Array(12)].map((_, i) => (
                  <circle 
                    key={i} 
                    cx={(Math.random() - 0.5) * 200} 
                    cy={(Math.random() - 0.5) * 150} 
                    r="3" 
                    fill={tealDeep} 
                  />
                ))}
              </g>
            </motion.g>
          </g>

          {/* Level 4: Organization - Emerging Lines */}
          <g transform="translate(500, 730)">
            {/* Central Stream of lines */}
            {[...Array(9)].map((_, i) => {
              const xTarget = (i - 4) * 50;
              const path = `M0 0 Q0 -50 ${xTarget / 2} -150 T ${xTarget} -300`;
              return (
                <motion.path
                  key={i}
                  d={path}
                  fill="none"
                  stroke={tealDeep}
                  strokeWidth="1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 + i * 0.1 }}
                />
              );
            })}

            {/* Branch Labels and Connectors Left */}
            <g transform="translate(-160, -100)" className="fill-zinc-600 text-[18px]">
              <g transform="translate(-180, 0)">
                <text textAnchor="end">{labels.l4_left[0]}</text>
                <circle cx="20" cy="-5" r="4" fill={tealDeep} />
                <line x1="20" y1="-5" x2="70" y2="-5" stroke={tealDeep} strokeWidth="1" />
              </g>
              <g transform="translate(-200, 50)">
                <text textAnchor="end">{labels.l4_left[1]}</text>
                <circle cx="20" cy="-5" r="4" fill={tealDeep} />
                <line x1="20" y1="-5" x2="100" y2="-5" stroke={tealDeep} strokeWidth="1" />
              </g>
              <g transform="translate(-220, 100)">
                <text textAnchor="end">{labels.l4_left[2]}</text>
                <circle cx="20" cy="-5" r="4" fill={tealDeep} />
                <line x1="20" y1="-5" x2="140" y2="-5" stroke={tealDeep} strokeWidth="1" />
              </g>
            </g>

            {/* Branch Labels and Connectors Right */}
            <g transform="translate(180, -100)" className="fill-zinc-600 text-[18px]">
              <g transform="translate(180, 0)">
                <text textAnchor="start">{labels.l4_right[0]}</text>
                <circle cx="-20" cy="-5" r="4" fill={tealDeep} />
                <line x1="-20" y1="-5" x2="-70" y2="-5" stroke={tealDeep} strokeWidth="1" />
              </g>
              <g transform="translate(200, 50)">
                <text textAnchor="start">{labels.l4_right[1]}</text>
                <circle cx="-20" cy="-5" r="4" fill={tealDeep} />
                <line x1="-20" y1="-5" x2="-100" y2="-5" stroke={tealDeep} strokeWidth="1" />
              </g>
              <g transform="translate(220, 100)">
                <text textAnchor="start">{labels.l4_right[2]}</text>
                <circle cx="-20" cy="-5" r="4" fill={tealDeep} />
                <line x1="-20" y1="-5" x2="-140" y2="-5" stroke={tealDeep} strokeWidth="1" />
              </g>
            </g>
          </g>

          {/* Level 5: Evolution Arches */}
          <g transform="translate(500, 180)">
             {/* Large Central Vault */}
             <motion.path
                d="M-350 150 Q-150 -150 0 -150 T 350 150"
                fill="none"
                stroke={tealDeep}
                strokeWidth="0.8"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
             />
             <motion.path
                d="M-250 150 Q-100 -80 0 -80 T 250 150"
                fill="none"
                stroke={tealDeep}
                strokeWidth="0.8"
                opacity="0.2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: 0.5 }}
             />

             {/* Connection Nodes at top */}
             <g>
                {[...Array(7)].map((_, i) => {
                  const x = (i - 3) * 100;
                  const y = -120 - Math.sin(Math.PI * i / 6) * 30;
                  return (
                    <g key={i}>
                      <circle cx={x} cy={y} r="3" fill={tealDeep} />
                    </g>
                  );
                })}
             </g>

             {/* Central descriptors */}
             <g transform="translate(0, 150)" className="fill-zinc-600 text-[18px] font-light">
                <text textAnchor="middle" dy="0">{labels.top[0]}</text>
                <text textAnchor="middle" dy="30">{labels.top[1]}</text>
                <text textAnchor="middle" dy="60">{labels.top[2]}</text>
                <line x1="-40" y1="80" x2="40" y2="80" stroke={accent} strokeWidth="2" />
             </g>
          </g>

          {/* Bottom Footer Caption removed as it is duplicated in App.tsx */}

        </svg>
      </div>
    </div>
  );
};
