const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-16 border-t border-subtle">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <p className="text-[10px] tracking-wider text-text-faint">© Joshua Chuah {currentYear}</p>
        <p className="text-[10px] tracking-wider text-text-faint">Designed with intention</p>
      </div>
    </footer>
  );
};

export default Footer;