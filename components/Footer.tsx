export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/50 mt-12 py-8 flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 text-slate-500 text-sm">
        <span>&copy; {new Date().getFullYear()} Deepak Yadav.</span>
      </div>
    </footer>
  );
}
