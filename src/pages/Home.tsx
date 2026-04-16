import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Rocket, Users, Award, ChevronRight, Play, Zap, Plane, Cpu, Globe } from 'lucide-react';
import { KALAM_QUOTES, SUCCESS_STORIES } from '../constants';

const RocketWithFire = ({ size }: { size: number }) => {
  return (
    <div className="relative flex flex-col items-center [transform-style:preserve-3d] will-change-transform">
      {/* Rocket Body */}
      <motion.div
        animate={{ 
          y: [0, -1, 0],
        }}
        transition={{ duration: 0.3, repeat: Infinity, ease: "linear" }}
        className="text-brand-accent drop-shadow-[0_0_15px_rgba(249,115,22,0.9)] [transform-style:preserve-3d]"
      >
        <Rocket size={size} className="-rotate-45" />
      </motion.div>
      
      {/* Fire Effect - Simplified and stabilized */}
      <div className="absolute top-[85%] flex flex-col items-center [transform-style:preserve-3d] pointer-events-none">
        <motion.div
          animate={{
            scaleY: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-1.5 h-6 bg-gradient-to-t from-transparent via-orange-500 to-yellow-300 rounded-full blur-[1px] origin-top will-change-transform"
        />
        <motion.div
          animate={{
            scaleY: [1, 1.8, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 w-3 h-10 bg-orange-600/20 rounded-full blur-[4px] origin-top will-change-transform"
        />
      </div>
    </div>
  );
};

const NucleusAnimation = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] flex items-center justify-center [perspective:2000px] [transform-style:preserve-3d]">
      {/* Central Nucleus - Kalam Sketch */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-brand-accent/30 shadow-[0_0_50px_rgba(249,115,22,0.3)] bg-brand-blue will-change-transform"
        style={{ transform: 'translateZ(1px)' }} // Slightly forward to prevent Z-fighting
      >
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" 
          alt="Dr. APJ Abdul Kalam Sketch"
          className="w-full h-full object-cover grayscale contrast-125 opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/20 to-transparent" />
      </motion.div>

      {/* Orbiting Elements - 3D Spherical Effect */}
      <div className="absolute inset-0 [transform-style:preserve-3d] pointer-events-none">
        {[
          { rx: 75, ry: 15, duration: 12 },
          { rx: -45, ry: 45, duration: 18 },
          { rx: 35, ry: -65, duration: 24 },
        ].map((orbit, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] will-change-transform"
            style={{
              width: '100%',
              maxWidth: 300 + i * 50,
              aspectRatio: '1/1',
              transform: `rotateX(${orbit.rx}deg) rotateY(${orbit.ry}deg)`,
            }}
          >
            {/* Orbit Path */}
            <div className="absolute inset-0 border border-white/10 rounded-full" />
            
            {/* Rotating Container */}
            <motion.div
              className="absolute inset-0 [transform-style:preserve-3d] will-change-transform"
              animate={{ rotateZ: 360 }}
              transition={{ duration: orbit.duration, repeat: Infinity, ease: "linear" }}
            >
              {/* The Rocket */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] will-change-transform"
                style={{ transform: 'rotateX(-90deg) rotateY(90deg)' }}
              >
                <RocketWithFire size={24} />
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-accent/5 rounded-full blur-[100px] [transform:translateZ(-250px)]" />
    </div>
  );
};

const AnimatedWings = () => {
  return (
    <span className="relative inline-block">
      {/* The Text - Solid color for maximum visibility */}
      <span className="relative z-30 text-brand-accent font-black tracking-tighter drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
        <motion.span
          className="relative inline-block"
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          WINGS
        </motion.span>
      </span>
      
      {/* Background contrast block - ensures text is visible even if background is busy */}
      <div className="absolute -inset-2 bg-brand-blue/60 blur-xl z-10 rounded-full pointer-events-none" />
    </span>
  );
};

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % KALAM_QUOTES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-36 md:pt-48 lg:pt-20">
        {/* Background Effects - Lower Z-index */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left relative z-30"
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
                IGNITE YOUR <br />
                <AnimatedWings />
              </h1>
              <p className="text-xl md:text-2xl font-light text-slate-400 mb-8 max-w-xl">
                DREAM IT. BUILD IT. FLY IT. — Spark the fire that gives your mind wings.
              </p>

              <div className="h-24 flex items-center mb-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={quoteIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="text-lg italic text-brand-accent font-medium border-l-2 border-brand-accent/30 pl-6"
                  >
                    "{KALAM_QUOTES[quoteIndex]}"
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link
                  to="/community"
                  className="px-10 py-5 bg-brand-accent text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-brand-accent/30"
                >
                  Join Community <ChevronRight size={20} />
                </Link>
                <p className="text-slate-500 text-sm max-w-[200px]">
                  Join India’s student innovation platform for drones, IoT & robotics
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <NucleusAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Challenge */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-brand-accent/20"
        >
          <div>
            <span className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-2 block">Upcoming Challenge</span>
            <h2 className="text-4xl font-bold mb-4">Build a Line Following Bot</h2>
            <p className="text-slate-400">Put your engineering skills to the test. Registration closes in 5 days.</p>
          </div>
          <Link
            to="/community"
            className="px-8 py-4 bg-white text-brand-blue rounded-2xl font-bold hover:bg-slate-200 transition-colors"
          >
            Register Now
          </Link>
        </motion.div>
      </section>

      {/* Why Firewing? - Enhanced Style */}
      <section className="container mx-auto px-6 py-20">
        <div className="glass rounded-[3rem] p-8 md:p-16 border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                  Why <span className="text-brand-accent">Firewing?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-12 max-w-lg">
                  We are more than just a platform; we are a launchpad for the next generation of Indian engineers and dreamers.
                </p>
              </motion.div>
              
              <div className="grid gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group flex gap-6 p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Zap className="text-brand-accent" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Practical Experience</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Theory only takes you so far—real innovation happens at the workbench. Our boards feature fully immersive, practical exercises designed to captivate young minds.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="group flex gap-6 p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="text-blue-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Free to Join Our Club</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Education should be accessible to all. Joining our club is completely free, giving you access to exclusive resources, workshops, and a vibrant community.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-accent/20 blur-3xl rounded-full opacity-30" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                  alt="Innovation Lab"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center">
                      <Rocket className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Ready to Fly?</p>
                      <p className="text-slate-300 text-xs">Join 500+ students building today.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories - Auto Sliding Marquee */}
      <section className="bg-slate-900/50 py-20 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Developers</h2>
          <p className="text-slate-400">Our Community Inspired Members</p>
        </div>

        <div className="relative flex overflow-hidden group">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {/* Double the stories for seamless loop */}
            {[...SUCCESS_STORIES, ...SUCCESS_STORIES].map((story, idx) => (
              <div
                key={idx}
                className="w-[350px] glass rounded-3xl overflow-hidden shrink-0"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 whitespace-normal">
                  <div className="flex items-center gap-2 text-brand-accent mb-2">
                    <Award size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">{story.achievement}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{story.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{story.project}</p>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{story.story}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
