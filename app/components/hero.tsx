import foto from "../foto.png";

export default function Hero() {
    return(
        <div className="container mx-auto p-2 text-center">
      <h1 className="text-pink-500 font-bold">CV Online</h1>
      <h1 className="text-3x1">Kariman Septiana</h1>
      <Profile />
      <p>
      Antony Matheus dos Santos (lahir 24 Februari 2000), dikenal dengan sebutan Antony, adalah seorang pemain sepak bola profesional Brasil yang bermain sebagai gelandang sayap untuk klub Liga Utama Inggris Manchester United dan tim nasional Brasil.
      </p>
    </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Kariman Septiana Profile" className="fotoku" />;
   }