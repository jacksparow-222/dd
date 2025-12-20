'use client';

export default function CloudBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cloud Layer 1 - Slow */}
      <div className="absolute inset-0 opacity-30">
        <div className="cloud-layer cloud-slow">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </div>
      </div>
      
      {/* Cloud Layer 2 - Medium */}
      <div className="absolute inset-0 opacity-20">
        <div className="cloud-layer cloud-medium">
          <div className="cloud cloud-4"></div>
          <div className="cloud cloud-5"></div>
          <div className="cloud cloud-6"></div>
        </div>
      </div>
      
      {/* Cloud Layer 3 - Fast */}
      <div className="absolute inset-0 opacity-10">
        <div className="cloud-layer cloud-fast">
          <div className="cloud cloud-7"></div>
          <div className="cloud cloud-8"></div>
        </div>
      </div>
      
      <style jsx>{`
        .cloud-layer {
          position: absolute;
          width: 200%;
          height: 100%;
          top: 0;
          left: 0;
          will-change: transform; /* Optimize for performance */
        }
        
        .cloud {
          position: absolute;
          background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%);
          border-radius: 100px;
          filter: blur(40px);
          backface-visibility: hidden; /* Prevent flickering */
        }
        
        /* Cloud sizes and positions */
        .cloud-1 {
          width: 350px;
          height: 120px;
          top: 10%;
          left: 10%;
        }
        
        .cloud-2 {
          width: 400px;
          height: 140px;
          top: 30%;
          left: 50%;
        }
        
        .cloud-3 {
          width: 300px;
          height: 100px;
          top: 60%;
          left: 20%;
        }
        
        .cloud-4 {
          width: 450px;
          height: 150px;
          top: 20%;
          left: 70%;
        }
        
        .cloud-5 {
          width: 320px;
          height: 110px;
          top: 50%;
          left: 40%;
        }
        
        .cloud-6 {
          width: 380px;
          height: 130px;
          top: 70%;
          left: 60%;
        }
        
        .cloud-7 {
          width: 280px;
          height: 90px;
          top: 15%;
          left: 30%;
        }
        
        .cloud-8 {
          width: 420px;
          height: 145px;
          top: 55%;
          left: 80%;
        }
        
        /* Responsive - reduce on mobile for better performance */
        @media (max-width: 768px) {
          .cloud {
            filter: blur(20px);
          }
          
          .cloud-1, .cloud-2, .cloud-3,
          .cloud-4, .cloud-5, .cloud-6,
          .cloud-7, .cloud-8 {
            width: 200px;
            height: 80px;
          }
        }
      `}</style>
    </div>
  );
}
