import { Rocket, Mail, Phone, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <Rocket className="text-white" size={18} />
              </div>
              <span className="text-xl font-black tracking-tighter">FIREWING<span className="text-brand-accent">FAB</span></span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Inspired by APJ Abdul Kalam. Empowering the next generation of RC builders and aerospace innovators in India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:text-brand-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> info.abhram@gmail.com</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 FirewingFab. All rights reserved.</p>
          <p className="flex items-center gap-1">Powered by <span className="text-slate-300 font-bold">Abhram</span></p>
        </div>
      </div>
    </footer>
  );
}
