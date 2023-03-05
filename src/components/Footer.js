const Footer = () => {
  return (
    <div className="footer  py-5 flex items-center justify-center bg-slate-900/95">
      <p className="text-slate-400">
        &copy; {new Date().getFullYear()} Proxima. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
