import { motion } from 'motion/react';
import { MessageCircle, Trophy, Users, Star, ArrowRight } from 'lucide-react';
import { SUCCESS_STORIES } from '../constants';

export default function Community() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">DON'T BUILD <span className="text-gradient">ALONE</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Connect with thousands of builders, share your progress, and learn from the best.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-32">
        <motion.div
          whileHover={{ y: -5 }}
          className="glass p-8 rounded-[2.5rem] border-brand-accent/20 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
            <MessageCircle className="text-green-400" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Join Our WhatsApp Group</h2>
          <p className="text-slate-400 mb-8">Get instant help, share photos of your builds, and stay updated on local meetups.</p>
          <button className="mt-auto px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-bold transition-colors w-full">
            Join WhatsApp
          </button>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="glass p-8 rounded-[2.5rem] border-blue-500/20 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
            <Trophy className="text-blue-400" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Upcoming Challenge</h2>
          <p className="text-slate-400 mb-8">"Build a Line Following Bot" — Show off your coding and hardware skills.</p>
          <button className="mt-auto px-8 py-4 bg-brand-accent hover:bg-orange-500 text-white rounded-2xl font-bold transition-colors w-full">
            Register Now
          </button>
        </motion.div>
      </div>

      <section className="mb-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Achievements</h2>
          <button className="text-brand-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-6 relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-accent"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-bold text-lg">{story.name}</h3>
                  <p className="text-sm text-slate-500">{story.project}</p>
                </div>
              </div>
              
              <div className="bg-brand-accent/10 text-brand-accent px-3 py-1 rounded-lg text-xs font-bold inline-block mb-4">
                {story.achievement}
              </div>

              <p className="text-slate-400 text-sm italic leading-relaxed">
                "{story.story}"
              </p>

              <div className="absolute top-4 right-4 text-brand-accent/20">
                <Star size={40} fill="currentColor" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
