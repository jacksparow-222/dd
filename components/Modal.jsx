
export default function Modal({ isOpen, onClose, imgSrc, title }){
  if(!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-4 max-w-3xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-black text-2xl font-bold">&times;</button>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <img src={imgSrc} alt={title} className="rounded-lg w-full" />
      </div>
    </div>
  )
}
