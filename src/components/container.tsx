export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] mx-auto bg-white/70 flex flex-col min-h-screen border-l border-r">
      {children}
    </div>
  );
}
