'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ExternalLink } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string;
  title: string;
}

export default function Modal({ isOpen, onClose, imgSrc, title }: ModalProps) {
  
  // Fermer avec la touche Échap
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Bloquer le scroll quand le modal est ouvert
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          
          {/* Backdrop avec flou */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />

          {/* Container du Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50"
          >
            
            {/* Header / Barre d'outils */}
            <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between p-6 bg-gradient-to-b from-black/50 to-transparent pointer-events-none">
              <div className="flex flex-col">
                <motion.h3 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-xl md:text-2xl font-bold tracking-tight"
                >
                  {title}
                </motion.h3>
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mt-1">Projet Réalisé</span>
              </div>
              
              <button 
                onClick={onClose}
                className="pointer-events-auto w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:rotate-90"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Zone Image */}
            <div className="relative aspect-video md:aspect-auto overflow-hidden bg-slate-100">
              <motion.img 
                initial={{ filter: 'blur(10px)' }}
                animate={{ filter: 'blur(0px)' }}
                src={imgSrc} 
                alt={title} 
                className="w-full h-auto max-h-[80vh] object-contain block mx-auto shadow-inner"
              />
              
              {/* Overlay Décoratif */}
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/5 rounded-[2rem]" />
            </div>

            {/* Footer / Actions */}
            <div className="bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">Approuvé par ce client et son équipe</p>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold text-sm transition-all">
                  <Maximize2 className="w-4 h-4" />
                  Plein écran
                </button>
                <a 
                  href="#contact" 
                  onClick={onClose}
                  className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 transition-all"
                >
                  Projet similaire
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
