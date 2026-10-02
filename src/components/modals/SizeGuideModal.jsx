import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ruler } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose, category = 'tops' }) {
  const [unit, setUnit] = useState('inches'); // 'inches' | 'cm'
  const isBottom = category.includes('jean') || category.includes('cargo') || category.includes('bottom');

  const topsData = [
    { size: 'S', chest: unit === 'inches' ? '42"' : '107 cm', length: unit === 'inches' ? '28"' : '71 cm', shoulder: unit === 'inches' ? '20.5"' : '52 cm', sleeve: unit === 'inches' ? '9.0"' : '23 cm' },
    { size: 'M', chest: unit === 'inches' ? '44"' : '112 cm', length: unit === 'inches' ? '29"' : '74 cm', shoulder: unit === 'inches' ? '21.5"' : '55 cm', sleeve: unit === 'inches' ? '9.5"' : '24 cm' },
    { size: 'L', chest: unit === 'inches' ? '46"' : '117 cm', length: unit === 'inches' ? '30"' : '76 cm', shoulder: unit === 'inches' ? '22.5"' : '57 cm', sleeve: unit === 'inches' ? '10.0"' : '25 cm' },
    { size: 'XL', chest: unit === 'inches' ? '48"' : '122 cm', length: unit === 'inches' ? '31"' : '79 cm', shoulder: unit === 'inches' ? '23.5"' : '60 cm', sleeve: unit === 'inches' ? '10.5"' : '27 cm' },
    { size: 'XXL', chest: unit === 'inches' ? '50"' : '127 cm', length: unit === 'inches' ? '32"' : '81 cm', shoulder: unit === 'inches' ? '24.5"' : '62 cm', sleeve: unit === 'inches' ? '11.0"' : '28 cm' },
  ];

  const bottomsData = [
    { size: '28 (S)', waist: unit === 'inches' ? '29-30"' : '74-76 cm', hip: unit === 'inches' ? '42"' : '107 cm', length: unit === 'inches' ? '41"' : '104 cm', thigh: unit === 'inches' ? '26"' : '66 cm' },
    { size: '30 (M)', waist: unit === 'inches' ? '31-32"' : '79-81 cm', hip: unit === 'inches' ? '44"' : '112 cm', length: unit === 'inches' ? '42"' : '107 cm', thigh: unit === 'inches' ? '27"' : '69 cm' },
    { size: '32 (L)', waist: unit === 'inches' ? '33-34"' : '84-86 cm', hip: unit === 'inches' ? '46"' : '117 cm', length: unit === 'inches' ? '42.5"' : '108 cm', thigh: unit === 'inches' ? '28"' : '71 cm' },
    { size: '34 (XL)', waist: unit === 'inches' ? '35-36"' : '89-91 cm', hip: unit === 'inches' ? '48"' : '122 cm', length: unit === 'inches' ? '43"' : '109 cm', thigh: unit === 'inches' ? '29"' : '74 cm' },
    { size: '36 (XXL)', waist: unit === 'inches' ? '37-38"' : '94-97 cm', hip: unit === 'inches' ? '50"' : '127 cm', length: unit === 'inches' ? '43.5"' : '110 cm', thigh: unit === 'inches' ? '30"' : '76 cm' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative bg-softBlack border border-white/10 p-6 sm:p-8 max-w-2xl w-full z-10 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-5">
              <div>
                <div className="flex items-center gap-2 text-icyBlue text-xs font-mono uppercase tracking-widest mb-1">
                  <Ruler className="w-4 h-4" />
                  <span>Size Specification</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-offWhite uppercase tracking-wide">
                  {isBottom ? 'Bottoms Fit Guide' : 'Oversized Silhouette Guide'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-lightGray/60 hover:text-offWhite transition-colors p-1"
                aria-label="Close size guide"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Units Toggle */}
            <div className="flex items-center justify-between mt-5 mb-4">
              <p className="text-xs text-lightGray">
                All garments are cut in Cold Ritual's signature dropped-shoulder streetwear proportion.
              </p>
              <div className="inline-flex border border-white/10 p-0.5 bg-deepBlack text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setUnit('inches')}
                  className={`px-3 py-1 transition-colors ${unit === 'inches' ? 'bg-white/20 text-offWhite font-semibold' : 'text-lightGray/60 hover:text-offWhite'}`}
                >
                  INCHES
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('cm')}
                  className={`px-3 py-1 transition-colors ${unit === 'cm' ? 'bg-white/20 text-offWhite font-semibold' : 'text-lightGray/60 hover:text-offWhite'}`}
                >
                  CM
                </button>
              </div>
            </div>

            {/* Measurement Table */}
            <div className="overflow-x-auto border border-white/10">
              <table className="w-full text-left text-xs font-mono text-offWhite">
                <thead>
                  <tr className="bg-deepBlack border-b border-white/10 text-lightGray uppercase tracking-wider">
                    <th className="py-3 px-4">Size</th>
                    {isBottom ? (
                      <>
                        <th className="py-3 px-4">Waist</th>
                        <th className="py-3 px-4">Hip</th>
                        <th className="py-3 px-4">Thigh</th>
                        <th className="py-3 px-4">Length</th>
                      </>
                    ) : (
                      <>
                        <th className="py-3 px-4">Chest</th>
                        <th className="py-3 px-4">Length</th>
                        <th className="py-3 px-4">Shoulder</th>
                        <th className="py-3 px-4">Sleeve</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {(isBottom ? bottomsData : topsData).map((row) => (
                    <tr key={row.size} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-icyBlue">{row.size}</td>
                      {isBottom ? (
                        <>
                          <td className="py-3.5 px-4">{row.waist}</td>
                          <td className="py-3.5 px-4">{row.hip}</td>
                          <td className="py-3.5 px-4">{row.thigh}</td>
                          <td className="py-3.5 px-4">{row.length}</td>
                        </>
                      ) : (
                        <>
                          <td className="py-3.5 px-4">{row.chest}</td>
                          <td className="py-3.5 px-4">{row.length}</td>
                          <td className="py-3.5 px-4">{row.shoulder}</td>
                          <td className="py-3.5 px-4">{row.sleeve}</td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Fit Tips */}
            <div className="mt-6 bg-deepBlack/80 border border-white/5 p-4 text-xs space-y-2 text-lightGray">
              <div className="font-mono text-offWhite uppercase font-semibold">FIT ADVICE FOR INDIAN SILHOUETTES:</div>
              <ul className="list-disc list-inside space-y-1 text-lightGray/80 leading-relaxed font-sans">
                <li><strong className="text-offWhite">Tops:</strong> Designed oversized. If you prefer a regular boxy streetwear fit, choose your standard size. If you want a tailored fit, size down by one.</li>
                <li><strong className="text-offWhite">Denim & Cargos:</strong> Cut with relaxed stack volume. True to waist size with built-in parachute bungee drawcords for variable styling.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
